# SDK

## Overview

Direct Connect links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an Direct Connect router. With this connection in place, you can create virtual interfaces directly to the Amazon Web Services Cloud (for example, to Amazon EC2 and Amazon S3) and to Amazon VPC, bypassing Internet service providers in your network path. A connection provides access to all Amazon Web Services Regions except the China (Beijing) and (China) Ningxia Regions. Amazon Web Services resources in the China Regions can only be accessed through locations associated with those Regions.

Amazon Web Services documentation
<https://docs.aws.amazon.com/directconnect/>
### Available Operations

* [acceptDirectConnectGatewayAssociationProposal](#acceptdirectconnectgatewayassociationproposal) - Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.
* [~~allocateConnectionOnInterconnect~~](#allocateconnectiononinterconnect) - <p>Deprecated. Use <a>AllocateHostedConnection</a> instead.</p> <p>Creates a hosted connection on an interconnect.</p> <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note> :warning: **Deprecated**
* [allocateHostedConnection](#allocatehostedconnection) - <p>Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.</p> <p>Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. Amazon Web Services polices the hosted connection for the specified capacity and the Direct Connect Partner must also police the hosted connection for the specified capacity.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>
* [allocatePrivateVirtualInterface](#allocateprivatevirtualinterface) - <p>Provisions a private virtual interface to be owned by the specified Amazon Web Services account.</p> <p>Virtual interfaces created using this action must be confirmed by the owner using <a>ConfirmPrivateVirtualInterface</a>. Until then, the virtual interface is in the <code>Confirming</code> state and is not available to handle traffic.</p>
* [allocatePublicVirtualInterface](#allocatepublicvirtualinterface) - <p>Provisions a public virtual interface to be owned by the specified Amazon Web Services account.</p> <p>The owner of a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web Services account.</p> <p>Virtual interfaces created using this function must be confirmed by the owner using <a>ConfirmPublicVirtualInterface</a>. Until this step has been completed, the virtual interface is in the <code>confirming</code> state and is not available to handle traffic.</p> <p>When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>
* [allocateTransitVirtualInterface](#allocatetransitvirtualinterface) - <p>Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this type of interface to connect a transit gateway to your Direct Connect gateway.</p> <p>The owner of a connection provisions a transit virtual interface to be owned by the specified Amazon Web Services account.</p> <p>After you create a transit virtual interface, it must be confirmed by the owner using <a>ConfirmTransitVirtualInterface</a>. Until this step has been completed, the transit virtual interface is in the <code>requested</code> state and is not available to handle traffic.</p>
* [associateConnectionWithLag](#associateconnectionwithlag) - <p>Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to Amazon Web Services is interrupted). The connection must be hosted on the same Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing the connection would cause the original LAG to fall below its setting for minimum number of operational connections, the request fails.</p> <p>Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG.</p> <p>For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.</p>
* [associateHostedConnection](#associatehostedconnection) - <p>Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to Amazon Web Services as it is being migrated.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>
* [associateMacSecKey](#associatemacseckey) - <p>Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with an Direct Connect dedicated connection.</p> <p>You must supply either the <code>secretARN,</code> or the CKN/CAK (<code>ckn</code> and <code>cak</code>) pair in the request.</p> <p>For information about MAC Security (MACsec) key considerations, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-key-consideration">MACsec pre-shared CKN/CAK key considerations </a> in the <i>Direct Connect User Guide</i>.</p>
* [associateVirtualInterface](#associatevirtualinterface) - <p>Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to Amazon Web Services is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails.</p> <p>Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using <a>AssociateHostedConnection</a>.</p> <p>To reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface itself or the connection to which the virtual interface is currently associated. Additionally, the requester must own the connection or LAG for the association.</p>
* [confirmConnection](#confirmconnection) - <p>Confirms the creation of the specified hosted connection on an interconnect.</p> <p>Upon creation, the hosted connection is initially in the <code>Ordering</code> state, and remains in this state until the owner confirms creation of the hosted connection.</p>
* [confirmCustomerAgreement](#confirmcustomeragreement) -  The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG). 
* [confirmPrivateVirtualInterface](#confirmprivatevirtualinterface) - <p>Accepts ownership of a private virtual interface created by another Amazon Web Services account.</p> <p>After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.</p>
* [confirmPublicVirtualInterface](#confirmpublicvirtualinterface) - <p>Accepts ownership of a public virtual interface created by another Amazon Web Services account.</p> <p>After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.</p>
* [confirmTransitVirtualInterface](#confirmtransitvirtualinterface) - <p>Accepts ownership of a transit virtual interface created by another Amazon Web Services account.</p> <p> After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.</p>
* [createBGPPeer](#createbgppeer) - <p>Creates a BGP peer on the specified virtual interface.</p> <p>You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access Amazon Web Services resources that also use that address family.</p> <p>If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot be in the same address family as an existing BGP peer on the virtual interface.</p> <p>When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p> <important> <p>If you let Amazon Web Services auto-assign IPv4 addresses, a /30 CIDR will be allocated from 169.254.0.0/16. Amazon Web Services does not recommend this option if you intend to use the customer router peer IP address as the source and destination for traffic. Instead you should use RFC 1918 or other addressing, and specify the address yourself. For more information about RFC 1918 see <a href="https://datatracker.ietf.org/doc/html/rfc1918"> Address Allocation for Private Internets</a>.</p> </important> <p>For a public virtual interface, the Autonomous System Number (ASN) must be private or already on the allow list for the virtual interface.</p>
* [createConnection](#createconnection) - <p>Creates a connection between a customer network and a specific Direct Connect location.</p> <p>A connection links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an Direct Connect router.</p> <p>To find the locations for your Region, use <a>DescribeLocations</a>.</p> <p>You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection is created.</p>
* [createDirectConnectGateway](#createdirectconnectgateway) - Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any Amazon Web Services Region after it is created. The virtual interfaces and virtual private gateways that are connected through a Direct Connect gateway can be in different Amazon Web Services Regions. This enables you to connect to a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic between them.
* [createDirectConnectGatewayAssociation](#createdirectconnectgatewayassociation) - Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.
* [createDirectConnectGatewayAssociationProposal](#createdirectconnectgatewayassociationproposal) - <p>Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway.</p> <p>You can associate a Direct Connect gateway and virtual private gateway or transit gateway that is owned by any Amazon Web Services account. </p>
* [createInterconnect](#createinterconnect) - <p>Creates an interconnect between an Direct Connect Partner's network and a specific Direct Connect location.</p> <p>An interconnect is a connection that is capable of hosting other connections. The Direct Connect Partner can use an interconnect to provide Direct Connect hosted connections to customers through their own network services. Like a standard connection, an interconnect links the partner's network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an Direct Connect router.</p> <p>You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect is created.</p> <p>For each end customer, the Direct Connect Partner provisions a connection on their interconnect by calling <a>AllocateHostedConnection</a>. The end customer can then connect to Amazon Web Services resources by creating a virtual interface on their connection, using the VLAN assigned to them by the Direct Connect Partner.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>
* [createLag](#createlag) - <p>Creates a link aggregation group (LAG) with the specified number of bundled physical dedicated connections between the customer network and a specific Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a single interface.</p> <p>All connections in a LAG must use the same bandwidth (either 1Gbps or 10Gbps) and must terminate at the same Direct Connect endpoint.</p> <p>You can have up to 10 dedicated connections per LAG. Regardless of this limit, if you request more connections for the LAG than Direct Connect can allocate on a single endpoint, no LAG is created.</p> <p>You can specify an existing physical dedicated connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG will be created on the same Direct Connect endpoint to which the dedicated connection terminates. Any virtual interfaces associated with the dedicated connection are automatically disassociated and re-associated with the LAG. The connection ID does not change.</p> <p>If the Amazon Web Services account used to create a LAG is a registered Direct Connect Partner, the LAG is automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual interfaces cannot be directly configured.</p>
* [createPrivateVirtualInterface](#createprivatevirtualinterface) - <p>Creates a private virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple VPCs, including VPCs in different Amazon Web Services Regions. Connecting the private virtual interface to a VGW only provides access to a single VPC within the same Region.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
* [createPublicVirtualInterface](#createpublicvirtualinterface) - <p>Creates a public virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A public virtual interface supports sending traffic to public services of Amazon Web Services such as Amazon S3.</p> <p>When creating an IPv6 public virtual interface (<code>addressFamily</code> is <code>ipv6</code>), leave the <code>customer</code> and <code>amazon</code> address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.</p>
* [createTransitVirtualInterface](#createtransitvirtualinterface) - <p>Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway.</p> <important> <p>If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails.</p> </important> <p>A jumbo MTU value must be either 1500 or 8500. No other values will be accepted. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
* [deleteBGPPeer](#deletebgppeer) - <p>Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.</p> <p>You cannot delete the last BGP peer from a virtual interface.</p>
* [deleteConnection](#deleteconnection) - <p>Deletes the specified connection.</p> <p>Deleting a connection only stops the Direct Connect port hour and data transfer charges. If you are partnering with any third parties to connect with the Direct Connect location, you must cancel your service with them separately.</p>
* [deleteDirectConnectGateway](#deletedirectconnectgateway) - Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached to the Direct Connect gateway and disassociate all virtual private gateways associated with the Direct Connect gateway.
* [deleteDirectConnectGatewayAssociation](#deletedirectconnectgatewayassociation) - <p>Deletes the association between the specified Direct Connect gateway and virtual private gateway.</p> <p>We recommend that you specify the <code>associationID</code> to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the <code>virtualGatewayId</code> and <code>directConnectGatewayId</code> to delete an association.</p>
* [deleteDirectConnectGatewayAssociationProposal](#deletedirectconnectgatewayassociationproposal) - Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.
* [deleteInterconnect](#deleteinterconnect) - <p>Deletes the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>
* [deleteLag](#deletelag) - Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.
* [deleteVirtualInterface](#deletevirtualinterface) - Deletes a virtual interface.
* [~~describeConnectionLoa~~](#describeconnectionloa) - <p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for a connection.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p> :warning: **Deprecated**
* [describeConnections](#describeconnections) - Displays the specified connection or all connections in this Region.
* [~~describeConnectionsOnInterconnect~~](#describeconnectionsoninterconnect) - <p>Deprecated. Use <a>DescribeHostedConnections</a> instead.</p> <p>Lists the connections that have been provisioned on the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note> :warning: **Deprecated**
* [describeCustomerMetadata](#describecustomermetadata) - Get and view a list of customer agreements, along with their signed status and whether the customer is an NNIPartner, NNIPartnerV2, or a nonPartner. 
* [describeDirectConnectGatewayAssociationProposals](#describedirectconnectgatewayassociationproposals) - Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway. 
* [describeDirectConnectGatewayAssociations](#describedirectconnectgatewayassociations) - <p>Lists the associations between your Direct Connect gateways and virtual private gateways and transit gateways. You must specify one of the following:</p> <ul> <li> <p>A Direct Connect gateway</p> <p>The response contains all virtual private gateways and transit gateways associated with the Direct Connect gateway.</p> </li> <li> <p>A virtual private gateway</p> <p>The response contains the Direct Connect gateway.</p> </li> <li> <p>A transit gateway</p> <p>The response contains the Direct Connect gateway.</p> </li> <li> <p>A Direct Connect gateway and a virtual private gateway</p> <p>The response contains the association between the Direct Connect gateway and virtual private gateway.</p> </li> <li> <p>A Direct Connect gateway and a transit gateway</p> <p>The response contains the association between the Direct Connect gateway and transit gateway.</p> </li> </ul>
* [describeDirectConnectGatewayAttachments](#describedirectconnectgatewayattachments) - Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response contains the attachment between the Direct Connect gateway and the virtual interface.
* [describeDirectConnectGateways](#describedirectconnectgateways) - Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.
* [describeHostedConnections](#describehostedconnections) - <p>Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG).</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>
* [~~describeInterconnectLoa~~](#describeinterconnectloa) - <p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for the specified interconnect.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p> :warning: **Deprecated**
* [describeInterconnects](#describeinterconnects) - Lists the interconnects owned by the Amazon Web Services account or only the specified interconnect.
* [describeLags](#describelags) - Describes all your link aggregation groups (LAG) or the specified LAG.
* [describeLoa](#describeloa) - <p>Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>
* [describeLocations](#describelocations) - Lists the Direct Connect locations in the current Amazon Web Services Region. These are the locations that can be selected when calling <a>CreateConnection</a> or <a>CreateInterconnect</a>.
* [describeRouterConfiguration](#describerouterconfiguration) -  Details about the router. 
* [describeTags](#describetags) - Describes the tags associated with the specified Direct Connect resources.
* [describeVirtualGateways](#describevirtualgateways) - <p>Lists the virtual private gateways owned by the Amazon Web Services account.</p> <p>You can create one or more Direct Connect private virtual interfaces linked to a virtual private gateway.</p>
* [describeVirtualInterfaces](#describevirtualinterfaces) - <p>Displays all virtual interfaces for an Amazon Web Services account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned.</p> <p>A virtual interface (VLAN) transmits the traffic between the Direct Connect location and the customer network.</p>
* [disassociateConnectionFromLag](#disassociateconnectionfromlag) - <p>Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the <a>DeleteConnection</a> request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an Direct Connect Partner is automatically converted to an interconnect.</p> <p>If disassociating the connection would cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections. </p>
* [disassociateMacSecKey](#disassociatemacseckey) - Removes the association between a MAC Security (MACsec) security key and an Direct Connect dedicated connection.
* [listVirtualInterfaceTestHistory](#listvirtualinterfacetesthistory) - Lists the virtual interface failover test history.
* [startBgpFailoverTest](#startbgpfailovertest) - <p>Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages.</p> <p>You can run the test on public, private, transit, and hosted virtual interfaces.</p> <p>You can use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html">ListVirtualInterfaceTestHistory</a> to view the virtual interface test history.</p> <p>If you need to stop the test before the test interval completes, use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html">StopBgpFailoverTest</a>.</p>
* [stopBgpFailoverTest](#stopbgpfailovertest) - Stops the virtual interface failover test.
* [tagResource](#tagresource) - <p>Adds the specified tags to the specified Direct Connect resource. Each resource can have a maximum of 50 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p>
* [untagResource](#untagresource) - Removes one or more tags from the specified Direct Connect resource.
* [updateConnection](#updateconnection) - <p>Updates the Direct Connect dedicated connection configuration.</p> <p>You can update the following parameters for a connection:</p> <ul> <li> <p>The connection name</p> </li> <li> <p>The connection's MAC Security (MACsec) encryption mode.</p> </li> </ul>
* [updateDirectConnectGateway](#updatedirectconnectgateway) - Updates the name of a current Direct Connect gateway.
* [updateDirectConnectGatewayAssociation](#updatedirectconnectgatewayassociation) - <p>Updates the specified attributes of the Direct Connect gateway association.</p> <p>Add or remove prefixes from the association.</p>
* [updateLag](#updatelag) - <p>Updates the attributes of the specified link aggregation group (LAG).</p> <p>You can update the following LAG attributes:</p> <ul> <li> <p>The name of the LAG.</p> </li> <li> <p>The value for the minimum number of connections that must be operational for the LAG itself to be operational. </p> </li> <li> <p>The LAG's MACsec encryption mode.</p> <p>Amazon Web Services assigns this value to each connection which is part of the LAG.</p> </li> <li> <p>The tags</p> </li> </ul> <note> <p>If you adjust the threshold value for the minimum number of operational connections, ensure that the new value does not cause the LAG to fall below the threshold and become non-operational.</p> </note>
* [updateVirtualInterfaceAttributes](#updatevirtualinterfaceattributes) - <p>Updates the specified attributes of the specified virtual private interface.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual q interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>

## acceptDirectConnectGatewayAssociationProposal

Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptDirectConnectGatewayAssociationProposalRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptDirectConnectGatewayAssociationProposalRequest;
use \OpenAPI\OpenAPI\Models\Shared\RouteFilterPrefix;
use \OpenAPI\OpenAPI\Models\Operations\AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptDirectConnectGatewayAssociationProposalRequest();
    $request->acceptDirectConnectGatewayAssociationProposalRequest = new AcceptDirectConnectGatewayAssociationProposalRequest();
    $request->acceptDirectConnectGatewayAssociationProposalRequest->associatedGatewayOwnerAccount = 'suscipit';
    $request->acceptDirectConnectGatewayAssociationProposalRequest->directConnectGatewayId = 'iure';
    $request->acceptDirectConnectGatewayAssociationProposalRequest->overrideAllowedPrefixesToDirectConnectGateway = [
        new RouteFilterPrefix(),
        new RouteFilterPrefix(),
    ];
    $request->acceptDirectConnectGatewayAssociationProposalRequest->proposalId = 'debitis';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';
    $request->xAmzTarget = AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum::OVERTURE_SERVICE_ACCEPT_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL;

    $response = $sdk->sdk->acceptDirectConnectGatewayAssociationProposal($request);

    if ($response->acceptDirectConnectGatewayAssociationProposalResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~allocateConnectionOnInterconnect~~

<p>Deprecated. Use <a>AllocateHostedConnection</a> instead.</p> <p>Creates a hosted connection on an interconnect.</p> <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AllocateConnectionOnInterconnectRequest;
use \OpenAPI\OpenAPI\Models\Shared\AllocateConnectionOnInterconnectRequest;
use \OpenAPI\OpenAPI\Models\Operations\AllocateConnectionOnInterconnectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllocateConnectionOnInterconnectRequest();
    $request->allocateConnectionOnInterconnectRequest = new AllocateConnectionOnInterconnectRequest();
    $request->allocateConnectionOnInterconnectRequest->bandwidth = 'voluptatum';
    $request->allocateConnectionOnInterconnectRequest->connectionName = 'iusto';
    $request->allocateConnectionOnInterconnectRequest->interconnectId = 'excepturi';
    $request->allocateConnectionOnInterconnectRequest->ownerAccount = 'nisi';
    $request->allocateConnectionOnInterconnectRequest->vlan = 925597;
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = AllocateConnectionOnInterconnectXAmzTargetEnum::OVERTURE_SERVICE_ALLOCATE_CONNECTION_ON_INTERCONNECT;

    $response = $sdk->sdk->allocateConnectionOnInterconnect($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## allocateHostedConnection

<p>Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.</p> <p>Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. Amazon Web Services polices the hosted connection for the specified capacity and the Direct Connect Partner must also police the hosted connection for the specified capacity.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AllocateHostedConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AllocateHostedConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AllocateHostedConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllocateHostedConnectionRequest();
    $request->allocateHostedConnectionRequest = new AllocateHostedConnectionRequest();
    $request->allocateHostedConnectionRequest->bandwidth = 'repellendus';
    $request->allocateHostedConnectionRequest->connectionId = 'sapiente';
    $request->allocateHostedConnectionRequest->connectionName = 'quo';
    $request->allocateHostedConnectionRequest->ownerAccount = 'odit';
    $request->allocateHostedConnectionRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->allocateHostedConnectionRequest->vlan = 870088;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = AllocateHostedConnectionXAmzTargetEnum::OVERTURE_SERVICE_ALLOCATE_HOSTED_CONNECTION;

    $response = $sdk->sdk->allocateHostedConnection($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## allocatePrivateVirtualInterface

<p>Provisions a private virtual interface to be owned by the specified Amazon Web Services account.</p> <p>Virtual interfaces created using this action must be confirmed by the owner using <a>ConfirmPrivateVirtualInterface</a>. Until then, the virtual interface is in the <code>Confirming</code> state and is not available to handle traffic.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AllocatePrivateVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AllocatePrivateVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\NewPrivateVirtualInterfaceAllocation;
use \OpenAPI\OpenAPI\Models\Shared\AddressFamilyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AllocatePrivateVirtualInterfaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllocatePrivateVirtualInterfaceRequest();
    $request->allocatePrivateVirtualInterfaceRequest = new AllocatePrivateVirtualInterfaceRequest();
    $request->allocatePrivateVirtualInterfaceRequest->connectionId = 'dolorum';
    $request->allocatePrivateVirtualInterfaceRequest->newPrivateVirtualInterfaceAllocation = new NewPrivateVirtualInterfaceAllocation();
    $request->allocatePrivateVirtualInterfaceRequest->newPrivateVirtualInterfaceAllocation->addressFamily = AddressFamilyEnum::IPV4;
    $request->allocatePrivateVirtualInterfaceRequest->newPrivateVirtualInterfaceAllocation->amazonAddress = 'nam';
    $request->allocatePrivateVirtualInterfaceRequest->newPrivateVirtualInterfaceAllocation->asn = 639921;
    $request->allocatePrivateVirtualInterfaceRequest->newPrivateVirtualInterfaceAllocation->authKey = 'occaecati';
    $request->allocatePrivateVirtualInterfaceRequest->newPrivateVirtualInterfaceAllocation->customerAddress = 'fugit';
    $request->allocatePrivateVirtualInterfaceRequest->newPrivateVirtualInterfaceAllocation->mtu = 537373;
    $request->allocatePrivateVirtualInterfaceRequest->newPrivateVirtualInterfaceAllocation->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->allocatePrivateVirtualInterfaceRequest->newPrivateVirtualInterfaceAllocation->virtualInterfaceName = 'optio';
    $request->allocatePrivateVirtualInterfaceRequest->newPrivateVirtualInterfaceAllocation->vlan = 521848;
    $request->allocatePrivateVirtualInterfaceRequest->ownerAccount = 'beatae';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = AllocatePrivateVirtualInterfaceXAmzTargetEnum::OVERTURE_SERVICE_ALLOCATE_PRIVATE_VIRTUAL_INTERFACE;

    $response = $sdk->sdk->allocatePrivateVirtualInterface($request);

    if ($response->virtualInterface !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## allocatePublicVirtualInterface

<p>Provisions a public virtual interface to be owned by the specified Amazon Web Services account.</p> <p>The owner of a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web Services account.</p> <p>Virtual interfaces created using this function must be confirmed by the owner using <a>ConfirmPublicVirtualInterface</a>. Until this step has been completed, the virtual interface is in the <code>confirming</code> state and is not available to handle traffic.</p> <p>When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AllocatePublicVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AllocatePublicVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\NewPublicVirtualInterfaceAllocation;
use \OpenAPI\OpenAPI\Models\Shared\AddressFamilyEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteFilterPrefix;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AllocatePublicVirtualInterfaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllocatePublicVirtualInterfaceRequest();
    $request->allocatePublicVirtualInterfaceRequest = new AllocatePublicVirtualInterfaceRequest();
    $request->allocatePublicVirtualInterfaceRequest->connectionId = 'ipsum';
    $request->allocatePublicVirtualInterfaceRequest->newPublicVirtualInterfaceAllocation = new NewPublicVirtualInterfaceAllocation();
    $request->allocatePublicVirtualInterfaceRequest->newPublicVirtualInterfaceAllocation->addressFamily = AddressFamilyEnum::IPV6;
    $request->allocatePublicVirtualInterfaceRequest->newPublicVirtualInterfaceAllocation->amazonAddress = 'aspernatur';
    $request->allocatePublicVirtualInterfaceRequest->newPublicVirtualInterfaceAllocation->asn = 18789;
    $request->allocatePublicVirtualInterfaceRequest->newPublicVirtualInterfaceAllocation->authKey = 'ad';
    $request->allocatePublicVirtualInterfaceRequest->newPublicVirtualInterfaceAllocation->customerAddress = 'natus';
    $request->allocatePublicVirtualInterfaceRequest->newPublicVirtualInterfaceAllocation->routeFilterPrefixes = [
        new RouteFilterPrefix(),
    ];
    $request->allocatePublicVirtualInterfaceRequest->newPublicVirtualInterfaceAllocation->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->allocatePublicVirtualInterfaceRequest->newPublicVirtualInterfaceAllocation->virtualInterfaceName = 'dolor';
    $request->allocatePublicVirtualInterfaceRequest->newPublicVirtualInterfaceAllocation->vlan = 616934;
    $request->allocatePublicVirtualInterfaceRequest->ownerAccount = 'laboriosam';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = AllocatePublicVirtualInterfaceXAmzTargetEnum::OVERTURE_SERVICE_ALLOCATE_PUBLIC_VIRTUAL_INTERFACE;

    $response = $sdk->sdk->allocatePublicVirtualInterface($request);

    if ($response->virtualInterface !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## allocateTransitVirtualInterface

<p>Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this type of interface to connect a transit gateway to your Direct Connect gateway.</p> <p>The owner of a connection provisions a transit virtual interface to be owned by the specified Amazon Web Services account.</p> <p>After you create a transit virtual interface, it must be confirmed by the owner using <a>ConfirmTransitVirtualInterface</a>. Until this step has been completed, the transit virtual interface is in the <code>requested</code> state and is not available to handle traffic.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AllocateTransitVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AllocateTransitVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\NewTransitVirtualInterfaceAllocation;
use \OpenAPI\OpenAPI\Models\Shared\AddressFamilyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AllocateTransitVirtualInterfaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllocateTransitVirtualInterfaceRequest();
    $request->allocateTransitVirtualInterfaceRequest = new AllocateTransitVirtualInterfaceRequest();
    $request->allocateTransitVirtualInterfaceRequest->connectionId = 'saepe';
    $request->allocateTransitVirtualInterfaceRequest->newTransitVirtualInterfaceAllocation = new NewTransitVirtualInterfaceAllocation();
    $request->allocateTransitVirtualInterfaceRequest->newTransitVirtualInterfaceAllocation->addressFamily = AddressFamilyEnum::IPV6;
    $request->allocateTransitVirtualInterfaceRequest->newTransitVirtualInterfaceAllocation->amazonAddress = 'architecto';
    $request->allocateTransitVirtualInterfaceRequest->newTransitVirtualInterfaceAllocation->asn = 60225;
    $request->allocateTransitVirtualInterfaceRequest->newTransitVirtualInterfaceAllocation->authKey = 'reiciendis';
    $request->allocateTransitVirtualInterfaceRequest->newTransitVirtualInterfaceAllocation->customerAddress = 'est';
    $request->allocateTransitVirtualInterfaceRequest->newTransitVirtualInterfaceAllocation->mtu = 653140;
    $request->allocateTransitVirtualInterfaceRequest->newTransitVirtualInterfaceAllocation->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->allocateTransitVirtualInterfaceRequest->newTransitVirtualInterfaceAllocation->virtualInterfaceName = 'dolores';
    $request->allocateTransitVirtualInterfaceRequest->newTransitVirtualInterfaceAllocation->vlan = 210382;
    $request->allocateTransitVirtualInterfaceRequest->ownerAccount = 'corporis';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = AllocateTransitVirtualInterfaceXAmzTargetEnum::OVERTURE_SERVICE_ALLOCATE_TRANSIT_VIRTUAL_INTERFACE;

    $response = $sdk->sdk->allocateTransitVirtualInterface($request);

    if ($response->allocateTransitVirtualInterfaceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateConnectionWithLag

<p>Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to Amazon Web Services is interrupted). The connection must be hosted on the same Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing the connection would cause the original LAG to fall below its setting for minimum number of operational connections, the request fails.</p> <p>Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG.</p> <p>For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateConnectionWithLagRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateConnectionWithLagRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateConnectionWithLagXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateConnectionWithLagRequest();
    $request->associateConnectionWithLagRequest = new AssociateConnectionWithLagRequest();
    $request->associateConnectionWithLagRequest->connectionId = 'accusantium';
    $request->associateConnectionWithLagRequest->lagId = 'iure';
    $request->xAmzAlgorithm = 'culpa';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'culpa';
    $request->xAmzTarget = AssociateConnectionWithLagXAmzTargetEnum::OVERTURE_SERVICE_ASSOCIATE_CONNECTION_WITH_LAG;

    $response = $sdk->sdk->associateConnectionWithLag($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateHostedConnection

<p>Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to Amazon Web Services as it is being migrated.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateHostedConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateHostedConnectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateHostedConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateHostedConnectionRequest();
    $request->associateHostedConnectionRequest = new AssociateHostedConnectionRequest();
    $request->associateHostedConnectionRequest->connectionId = 'consequuntur';
    $request->associateHostedConnectionRequest->parentConnectionId = 'repellat';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'velit';
    $request->xAmzTarget = AssociateHostedConnectionXAmzTargetEnum::OVERTURE_SERVICE_ASSOCIATE_HOSTED_CONNECTION;

    $response = $sdk->sdk->associateHostedConnection($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateMacSecKey

<p>Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with an Direct Connect dedicated connection.</p> <p>You must supply either the <code>secretARN,</code> or the CKN/CAK (<code>ckn</code> and <code>cak</code>) pair in the request.</p> <p>For information about MAC Security (MACsec) key considerations, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-key-consideration">MACsec pre-shared CKN/CAK key considerations </a> in the <i>Direct Connect User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateMacSecKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateMacSecKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateMacSecKeyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateMacSecKeyRequest();
    $request->associateMacSecKeyRequest = new AssociateMacSecKeyRequest();
    $request->associateMacSecKeyRequest->cak = 'error';
    $request->associateMacSecKeyRequest->ckn = 'quia';
    $request->associateMacSecKeyRequest->connectionId = 'quis';
    $request->associateMacSecKeyRequest->secretARN = 'vitae';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = AssociateMacSecKeyXAmzTargetEnum::OVERTURE_SERVICE_ASSOCIATE_MAC_SEC_KEY;

    $response = $sdk->sdk->associateMacSecKey($request);

    if ($response->associateMacSecKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateVirtualInterface

<p>Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to Amazon Web Services is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails.</p> <p>Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using <a>AssociateHostedConnection</a>.</p> <p>To reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface itself or the connection to which the virtual interface is currently associated. Additionally, the requester must own the connection or LAG for the association.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateVirtualInterfaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateVirtualInterfaceRequest();
    $request->associateVirtualInterfaceRequest = new AssociateVirtualInterfaceRequest();
    $request->associateVirtualInterfaceRequest->connectionId = 'ipsam';
    $request->associateVirtualInterfaceRequest->virtualInterfaceId = 'id';
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = AssociateVirtualInterfaceXAmzTargetEnum::OVERTURE_SERVICE_ASSOCIATE_VIRTUAL_INTERFACE;

    $response = $sdk->sdk->associateVirtualInterface($request);

    if ($response->virtualInterface !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmConnection

<p>Confirms the creation of the specified hosted connection on an interconnect.</p> <p>Upon creation, the hosted connection is initially in the <code>Ordering</code> state, and remains in this state until the owner confirms creation of the hosted connection.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfirmConnectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmConnectionRequest();
    $request->confirmConnectionRequest = new ConfirmConnectionRequest();
    $request->confirmConnectionRequest->connectionId = 'reiciendis';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = ConfirmConnectionXAmzTargetEnum::OVERTURE_SERVICE_CONFIRM_CONNECTION;

    $response = $sdk->sdk->confirmConnection($request);

    if ($response->confirmConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmCustomerAgreement

 The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmCustomerAgreementRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfirmCustomerAgreementRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmCustomerAgreementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmCustomerAgreementRequest();
    $request->confirmCustomerAgreementRequest = new ConfirmCustomerAgreementRequest();
    $request->confirmCustomerAgreementRequest->agreementName = 'voluptate';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'doloremque';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'dicta';
    $request->xAmzTarget = ConfirmCustomerAgreementXAmzTargetEnum::OVERTURE_SERVICE_CONFIRM_CUSTOMER_AGREEMENT;

    $response = $sdk->sdk->confirmCustomerAgreement($request);

    if ($response->confirmCustomerAgreementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmPrivateVirtualInterface

<p>Accepts ownership of a private virtual interface created by another Amazon Web Services account.</p> <p>After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPrivateVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfirmPrivateVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPrivateVirtualInterfaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmPrivateVirtualInterfaceRequest();
    $request->confirmPrivateVirtualInterfaceRequest = new ConfirmPrivateVirtualInterfaceRequest();
    $request->confirmPrivateVirtualInterfaceRequest->directConnectGatewayId = 'corporis';
    $request->confirmPrivateVirtualInterfaceRequest->virtualGatewayId = 'dolore';
    $request->confirmPrivateVirtualInterfaceRequest->virtualInterfaceId = 'iusto';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = ConfirmPrivateVirtualInterfaceXAmzTargetEnum::OVERTURE_SERVICE_CONFIRM_PRIVATE_VIRTUAL_INTERFACE;

    $response = $sdk->sdk->confirmPrivateVirtualInterface($request);

    if ($response->confirmPrivateVirtualInterfaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmPublicVirtualInterface

<p>Accepts ownership of a public virtual interface created by another Amazon Web Services account.</p> <p>After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPublicVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfirmPublicVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPublicVirtualInterfaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmPublicVirtualInterfaceRequest();
    $request->confirmPublicVirtualInterfaceRequest = new ConfirmPublicVirtualInterfaceRequest();
    $request->confirmPublicVirtualInterfaceRequest->virtualInterfaceId = 'ipsum';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'rem';
    $request->xAmzTarget = ConfirmPublicVirtualInterfaceXAmzTargetEnum::OVERTURE_SERVICE_CONFIRM_PUBLIC_VIRTUAL_INTERFACE;

    $response = $sdk->sdk->confirmPublicVirtualInterface($request);

    if ($response->confirmPublicVirtualInterfaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmTransitVirtualInterface

<p>Accepts ownership of a transit virtual interface created by another Amazon Web Services account.</p> <p> After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmTransitVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfirmTransitVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmTransitVirtualInterfaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmTransitVirtualInterfaceRequest();
    $request->confirmTransitVirtualInterfaceRequest = new ConfirmTransitVirtualInterfaceRequest();
    $request->confirmTransitVirtualInterfaceRequest->directConnectGatewayId = 'voluptates';
    $request->confirmTransitVirtualInterfaceRequest->virtualInterfaceId = 'quasi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->xAmzTarget = ConfirmTransitVirtualInterfaceXAmzTargetEnum::OVERTURE_SERVICE_CONFIRM_TRANSIT_VIRTUAL_INTERFACE;

    $response = $sdk->sdk->confirmTransitVirtualInterface($request);

    if ($response->confirmTransitVirtualInterfaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBGPPeer

<p>Creates a BGP peer on the specified virtual interface.</p> <p>You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access Amazon Web Services resources that also use that address family.</p> <p>If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot be in the same address family as an existing BGP peer on the virtual interface.</p> <p>When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p> <important> <p>If you let Amazon Web Services auto-assign IPv4 addresses, a /30 CIDR will be allocated from 169.254.0.0/16. Amazon Web Services does not recommend this option if you intend to use the customer router peer IP address as the source and destination for traffic. Instead you should use RFC 1918 or other addressing, and specify the address yourself. For more information about RFC 1918 see <a href="https://datatracker.ietf.org/doc/html/rfc1918"> Address Allocation for Private Internets</a>.</p> </important> <p>For a public virtual interface, the Autonomous System Number (ASN) must be private or already on the allow list for the virtual interface.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBGPPeerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateBGPPeerRequest;
use \OpenAPI\OpenAPI\Models\Shared\NewBGPPeer;
use \OpenAPI\OpenAPI\Models\Shared\AddressFamilyEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBGPPeerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBGPPeerRequest();
    $request->createBGPPeerRequest = new CreateBGPPeerRequest();
    $request->createBGPPeerRequest->newBGPPeer = new NewBGPPeer();
    $request->createBGPPeerRequest->newBGPPeer->addressFamily = AddressFamilyEnum::IPV6;
    $request->createBGPPeerRequest->newBGPPeer->amazonAddress = 'quibusdam';
    $request->createBGPPeerRequest->newBGPPeer->asn = 131797;
    $request->createBGPPeerRequest->newBGPPeer->authKey = 'deserunt';
    $request->createBGPPeerRequest->newBGPPeer->customerAddress = 'distinctio';
    $request->createBGPPeerRequest->virtualInterfaceId = 'quibusdam';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = CreateBGPPeerXAmzTargetEnum::OVERTURE_SERVICE_CREATE_BGP_PEER;

    $response = $sdk->sdk->createBGPPeer($request);

    if ($response->createBGPPeerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConnection

<p>Creates a connection between a customer network and a specific Direct Connect location.</p> <p>A connection links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an Direct Connect router.</p> <p>To find the locations for your Region, use <a>DescribeLocations</a>.</p> <p>You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection is created.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConnectionRequest();
    $request->createConnectionRequest = new CreateConnectionRequest();
    $request->createConnectionRequest->bandwidth = 'magni';
    $request->createConnectionRequest->connectionName = 'assumenda';
    $request->createConnectionRequest->lagId = 'ipsam';
    $request->createConnectionRequest->location = 'alias';
    $request->createConnectionRequest->providerName = 'fugit';
    $request->createConnectionRequest->requestMACSec = false;
    $request->createConnectionRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = CreateConnectionXAmzTargetEnum::OVERTURE_SERVICE_CREATE_CONNECTION;

    $response = $sdk->sdk->createConnection($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDirectConnectGateway

Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any Amazon Web Services Region after it is created. The virtual interfaces and virtual private gateways that are connected through a Direct Connect gateway can be in different Amazon Web Services Regions. This enables you to connect to a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic between them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDirectConnectGatewayRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDirectConnectGatewayRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDirectConnectGatewayXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDirectConnectGatewayRequest();
    $request->createDirectConnectGatewayRequest = new CreateDirectConnectGatewayRequest();
    $request->createDirectConnectGatewayRequest->amazonSideAsn = 248753;
    $request->createDirectConnectGatewayRequest->directConnectGatewayName = 'eligendi';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = CreateDirectConnectGatewayXAmzTargetEnum::OVERTURE_SERVICE_CREATE_DIRECT_CONNECT_GATEWAY;

    $response = $sdk->sdk->createDirectConnectGateway($request);

    if ($response->createDirectConnectGatewayResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDirectConnectGatewayAssociation

Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDirectConnectGatewayAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDirectConnectGatewayAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\RouteFilterPrefix;
use \OpenAPI\OpenAPI\Models\Operations\CreateDirectConnectGatewayAssociationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDirectConnectGatewayAssociationRequest();
    $request->createDirectConnectGatewayAssociationRequest = new CreateDirectConnectGatewayAssociationRequest();
    $request->createDirectConnectGatewayAssociationRequest->addAllowedPrefixesToDirectConnectGateway = [
        new RouteFilterPrefix(),
        new RouteFilterPrefix(),
        new RouteFilterPrefix(),
        new RouteFilterPrefix(),
    ];
    $request->createDirectConnectGatewayAssociationRequest->directConnectGatewayId = 'a';
    $request->createDirectConnectGatewayAssociationRequest->gatewayId = 'dolorum';
    $request->createDirectConnectGatewayAssociationRequest->virtualGatewayId = 'in';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = CreateDirectConnectGatewayAssociationXAmzTargetEnum::OVERTURE_SERVICE_CREATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION;

    $response = $sdk->sdk->createDirectConnectGatewayAssociation($request);

    if ($response->createDirectConnectGatewayAssociationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDirectConnectGatewayAssociationProposal

<p>Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway.</p> <p>You can associate a Direct Connect gateway and virtual private gateway or transit gateway that is owned by any Amazon Web Services account. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDirectConnectGatewayAssociationProposalRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateDirectConnectGatewayAssociationProposalRequest;
use \OpenAPI\OpenAPI\Models\Shared\RouteFilterPrefix;
use \OpenAPI\OpenAPI\Models\Operations\CreateDirectConnectGatewayAssociationProposalXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDirectConnectGatewayAssociationProposalRequest();
    $request->createDirectConnectGatewayAssociationProposalRequest = new CreateDirectConnectGatewayAssociationProposalRequest();
    $request->createDirectConnectGatewayAssociationProposalRequest->addAllowedPrefixesToDirectConnectGateway = [
        new RouteFilterPrefix(),
        new RouteFilterPrefix(),
        new RouteFilterPrefix(),
        new RouteFilterPrefix(),
    ];
    $request->createDirectConnectGatewayAssociationProposalRequest->directConnectGatewayId = 'ea';
    $request->createDirectConnectGatewayAssociationProposalRequest->directConnectGatewayOwnerAccount = 'aliquid';
    $request->createDirectConnectGatewayAssociationProposalRequest->gatewayId = 'laborum';
    $request->createDirectConnectGatewayAssociationProposalRequest->removeAllowedPrefixesToDirectConnectGateway = [
        new RouteFilterPrefix(),
        new RouteFilterPrefix(),
        new RouteFilterPrefix(),
        new RouteFilterPrefix(),
    ];
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = CreateDirectConnectGatewayAssociationProposalXAmzTargetEnum::OVERTURE_SERVICE_CREATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL;

    $response = $sdk->sdk->createDirectConnectGatewayAssociationProposal($request);

    if ($response->createDirectConnectGatewayAssociationProposalResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createInterconnect

<p>Creates an interconnect between an Direct Connect Partner's network and a specific Direct Connect location.</p> <p>An interconnect is a connection that is capable of hosting other connections. The Direct Connect Partner can use an interconnect to provide Direct Connect hosted connections to customers through their own network services. Like a standard connection, an interconnect links the partner's network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an Direct Connect router.</p> <p>You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect is created.</p> <p>For each end customer, the Direct Connect Partner provisions a connection on their interconnect by calling <a>AllocateHostedConnection</a>. The end customer can then connect to Amazon Web Services resources by creating a virtual interface on their connection, using the VLAN assigned to them by the Direct Connect Partner.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateInterconnectRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateInterconnectRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateInterconnectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateInterconnectRequest();
    $request->createInterconnectRequest = new CreateInterconnectRequest();
    $request->createInterconnectRequest->bandwidth = 'nam';
    $request->createInterconnectRequest->interconnectName = 'id';
    $request->createInterconnectRequest->lagId = 'blanditiis';
    $request->createInterconnectRequest->location = 'deleniti';
    $request->createInterconnectRequest->providerName = 'sapiente';
    $request->createInterconnectRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = CreateInterconnectXAmzTargetEnum::OVERTURE_SERVICE_CREATE_INTERCONNECT;

    $response = $sdk->sdk->createInterconnect($request);

    if ($response->interconnect !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLag

<p>Creates a link aggregation group (LAG) with the specified number of bundled physical dedicated connections between the customer network and a specific Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a single interface.</p> <p>All connections in a LAG must use the same bandwidth (either 1Gbps or 10Gbps) and must terminate at the same Direct Connect endpoint.</p> <p>You can have up to 10 dedicated connections per LAG. Regardless of this limit, if you request more connections for the LAG than Direct Connect can allocate on a single endpoint, no LAG is created.</p> <p>You can specify an existing physical dedicated connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG will be created on the same Direct Connect endpoint to which the dedicated connection terminates. Any virtual interfaces associated with the dedicated connection are automatically disassociated and re-associated with the LAG. The connection ID does not change.</p> <p>If the Amazon Web Services account used to create a LAG is a registered Direct Connect Partner, the LAG is automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual interfaces cannot be directly configured.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLagRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLagRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateLagXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLagRequest();
    $request->createLagRequest = new CreateLagRequest();
    $request->createLagRequest->childConnectionTags = [
        new Tag(),
        new Tag(),
    ];
    $request->createLagRequest->connectionId = 'magnam';
    $request->createLagRequest->connectionsBandwidth = 'distinctio';
    $request->createLagRequest->lagName = 'id';
    $request->createLagRequest->location = 'labore';
    $request->createLagRequest->numberOfConnections = 290077;
    $request->createLagRequest->providerName = 'suscipit';
    $request->createLagRequest->requestMACSec = false;
    $request->createLagRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = CreateLagXAmzTargetEnum::OVERTURE_SERVICE_CREATE_LAG;

    $response = $sdk->sdk->createLag($request);

    if ($response->lag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPrivateVirtualInterface

<p>Creates a private virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple VPCs, including VPCs in different Amazon Web Services Regions. Connecting the private virtual interface to a VGW only provides access to a single VPC within the same Region.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePrivateVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePrivateVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\NewPrivateVirtualInterface;
use \OpenAPI\OpenAPI\Models\Shared\AddressFamilyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreatePrivateVirtualInterfaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePrivateVirtualInterfaceRequest();
    $request->createPrivateVirtualInterfaceRequest = new CreatePrivateVirtualInterfaceRequest();
    $request->createPrivateVirtualInterfaceRequest->connectionId = 'excepturi';
    $request->createPrivateVirtualInterfaceRequest->newPrivateVirtualInterface = new NewPrivateVirtualInterface();
    $request->createPrivateVirtualInterfaceRequest->newPrivateVirtualInterface->addressFamily = AddressFamilyEnum::IPV4;
    $request->createPrivateVirtualInterfaceRequest->newPrivateVirtualInterface->amazonAddress = 'provident';
    $request->createPrivateVirtualInterfaceRequest->newPrivateVirtualInterface->asn = 551816;
    $request->createPrivateVirtualInterfaceRequest->newPrivateVirtualInterface->authKey = 'sint';
    $request->createPrivateVirtualInterfaceRequest->newPrivateVirtualInterface->customerAddress = 'accusantium';
    $request->createPrivateVirtualInterfaceRequest->newPrivateVirtualInterface->directConnectGatewayId = 'mollitia';
    $request->createPrivateVirtualInterfaceRequest->newPrivateVirtualInterface->enableSiteLink = false;
    $request->createPrivateVirtualInterfaceRequest->newPrivateVirtualInterface->mtu = 968962;
    $request->createPrivateVirtualInterfaceRequest->newPrivateVirtualInterface->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createPrivateVirtualInterfaceRequest->newPrivateVirtualInterface->virtualGatewayId = 'ad';
    $request->createPrivateVirtualInterfaceRequest->newPrivateVirtualInterface->virtualInterfaceName = 'eum';
    $request->createPrivateVirtualInterfaceRequest->newPrivateVirtualInterface->vlan = 221262;
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'debitis';
    $request->xAmzTarget = CreatePrivateVirtualInterfaceXAmzTargetEnum::OVERTURE_SERVICE_CREATE_PRIVATE_VIRTUAL_INTERFACE;

    $response = $sdk->sdk->createPrivateVirtualInterface($request);

    if ($response->virtualInterface !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPublicVirtualInterface

<p>Creates a public virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A public virtual interface supports sending traffic to public services of Amazon Web Services such as Amazon S3.</p> <p>When creating an IPv6 public virtual interface (<code>addressFamily</code> is <code>ipv6</code>), leave the <code>customer</code> and <code>amazon</code> address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePublicVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreatePublicVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\NewPublicVirtualInterface;
use \OpenAPI\OpenAPI\Models\Shared\AddressFamilyEnum;
use \OpenAPI\OpenAPI\Models\Shared\RouteFilterPrefix;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreatePublicVirtualInterfaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePublicVirtualInterfaceRequest();
    $request->createPublicVirtualInterfaceRequest = new CreatePublicVirtualInterfaceRequest();
    $request->createPublicVirtualInterfaceRequest->connectionId = 'eius';
    $request->createPublicVirtualInterfaceRequest->newPublicVirtualInterface = new NewPublicVirtualInterface();
    $request->createPublicVirtualInterfaceRequest->newPublicVirtualInterface->addressFamily = AddressFamilyEnum::IPV6;
    $request->createPublicVirtualInterfaceRequest->newPublicVirtualInterface->amazonAddress = 'deleniti';
    $request->createPublicVirtualInterfaceRequest->newPublicVirtualInterface->asn = 703889;
    $request->createPublicVirtualInterfaceRequest->newPublicVirtualInterface->authKey = 'in';
    $request->createPublicVirtualInterfaceRequest->newPublicVirtualInterface->customerAddress = 'architecto';
    $request->createPublicVirtualInterfaceRequest->newPublicVirtualInterface->routeFilterPrefixes = [
        new RouteFilterPrefix(),
    ];
    $request->createPublicVirtualInterfaceRequest->newPublicVirtualInterface->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createPublicVirtualInterfaceRequest->newPublicVirtualInterface->virtualInterfaceName = 'ullam';
    $request->createPublicVirtualInterfaceRequest->newPublicVirtualInterface->vlan = 714242;
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = CreatePublicVirtualInterfaceXAmzTargetEnum::OVERTURE_SERVICE_CREATE_PUBLIC_VIRTUAL_INTERFACE;

    $response = $sdk->sdk->createPublicVirtualInterface($request);

    if ($response->virtualInterface !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTransitVirtualInterface

<p>Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway.</p> <important> <p>If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails.</p> </important> <p>A jumbo MTU value must be either 1500 or 8500. No other values will be accepted. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTransitVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTransitVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\NewTransitVirtualInterface;
use \OpenAPI\OpenAPI\Models\Shared\AddressFamilyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateTransitVirtualInterfaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTransitVirtualInterfaceRequest();
    $request->createTransitVirtualInterfaceRequest = new CreateTransitVirtualInterfaceRequest();
    $request->createTransitVirtualInterfaceRequest->connectionId = 'consequuntur';
    $request->createTransitVirtualInterfaceRequest->newTransitVirtualInterface = new NewTransitVirtualInterface();
    $request->createTransitVirtualInterfaceRequest->newTransitVirtualInterface->addressFamily = AddressFamilyEnum::IPV6;
    $request->createTransitVirtualInterfaceRequest->newTransitVirtualInterface->amazonAddress = 'natus';
    $request->createTransitVirtualInterfaceRequest->newTransitVirtualInterface->asn = 166847;
    $request->createTransitVirtualInterfaceRequest->newTransitVirtualInterface->authKey = 'sunt';
    $request->createTransitVirtualInterfaceRequest->newTransitVirtualInterface->customerAddress = 'quo';
    $request->createTransitVirtualInterfaceRequest->newTransitVirtualInterface->directConnectGatewayId = 'illum';
    $request->createTransitVirtualInterfaceRequest->newTransitVirtualInterface->enableSiteLink = false;
    $request->createTransitVirtualInterfaceRequest->newTransitVirtualInterface->mtu = 864934;
    $request->createTransitVirtualInterfaceRequest->newTransitVirtualInterface->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createTransitVirtualInterfaceRequest->newTransitVirtualInterface->virtualInterfaceName = 'ea';
    $request->createTransitVirtualInterfaceRequest->newTransitVirtualInterface->vlan = 569101;
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = CreateTransitVirtualInterfaceXAmzTargetEnum::OVERTURE_SERVICE_CREATE_TRANSIT_VIRTUAL_INTERFACE;

    $response = $sdk->sdk->createTransitVirtualInterface($request);

    if ($response->createTransitVirtualInterfaceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBGPPeer

<p>Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.</p> <p>You cannot delete the last BGP peer from a virtual interface.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBGPPeerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteBGPPeerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBGPPeerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBGPPeerRequest();
    $request->deleteBGPPeerRequest = new DeleteBGPPeerRequest();
    $request->deleteBGPPeerRequest->asn = 453543;
    $request->deleteBGPPeerRequest->bgpPeerId = 'autem';
    $request->deleteBGPPeerRequest->customerAddress = 'nam';
    $request->deleteBGPPeerRequest->virtualInterfaceId = 'eaque';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = DeleteBGPPeerXAmzTargetEnum::OVERTURE_SERVICE_DELETE_BGP_PEER;

    $response = $sdk->sdk->deleteBGPPeer($request);

    if ($response->deleteBGPPeerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConnection

<p>Deletes the specified connection.</p> <p>Deleting a connection only stops the Direct Connect port hour and data transfer charges. If you are partnering with any third parties to connect with the Direct Connect location, you must cancel your service with them separately.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteConnectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectionRequest();
    $request->deleteConnectionRequest = new DeleteConnectionRequest();
    $request->deleteConnectionRequest->connectionId = 'cumque';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = DeleteConnectionXAmzTargetEnum::OVERTURE_SERVICE_DELETE_CONNECTION;

    $response = $sdk->sdk->deleteConnection($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDirectConnectGateway

Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached to the Direct Connect gateway and disassociate all virtual private gateways associated with the Direct Connect gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDirectConnectGatewayRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDirectConnectGatewayRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDirectConnectGatewayXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDirectConnectGatewayRequest();
    $request->deleteDirectConnectGatewayRequest = new DeleteDirectConnectGatewayRequest();
    $request->deleteDirectConnectGatewayRequest->directConnectGatewayId = 'dignissimos';
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'minus';
    $request->xAmzTarget = DeleteDirectConnectGatewayXAmzTargetEnum::OVERTURE_SERVICE_DELETE_DIRECT_CONNECT_GATEWAY;

    $response = $sdk->sdk->deleteDirectConnectGateway($request);

    if ($response->deleteDirectConnectGatewayResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDirectConnectGatewayAssociation

<p>Deletes the association between the specified Direct Connect gateway and virtual private gateway.</p> <p>We recommend that you specify the <code>associationID</code> to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the <code>virtualGatewayId</code> and <code>directConnectGatewayId</code> to delete an association.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDirectConnectGatewayAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDirectConnectGatewayAssociationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDirectConnectGatewayAssociationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDirectConnectGatewayAssociationRequest();
    $request->deleteDirectConnectGatewayAssociationRequest = new DeleteDirectConnectGatewayAssociationRequest();
    $request->deleteDirectConnectGatewayAssociationRequest->associationId = 'quam';
    $request->deleteDirectConnectGatewayAssociationRequest->directConnectGatewayId = 'dolor';
    $request->deleteDirectConnectGatewayAssociationRequest->virtualGatewayId = 'vero';
    $request->xAmzAlgorithm = 'nostrum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'perspiciatis';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->xAmzTarget = DeleteDirectConnectGatewayAssociationXAmzTargetEnum::OVERTURE_SERVICE_DELETE_DIRECT_CONNECT_GATEWAY_ASSOCIATION;

    $response = $sdk->sdk->deleteDirectConnectGatewayAssociation($request);

    if ($response->deleteDirectConnectGatewayAssociationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDirectConnectGatewayAssociationProposal

Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDirectConnectGatewayAssociationProposalRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteDirectConnectGatewayAssociationProposalRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDirectConnectGatewayAssociationProposalRequest();
    $request->deleteDirectConnectGatewayAssociationProposalRequest = new DeleteDirectConnectGatewayAssociationProposalRequest();
    $request->deleteDirectConnectGatewayAssociationProposalRequest->proposalId = 'porro';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum::OVERTURE_SERVICE_DELETE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL;

    $response = $sdk->sdk->deleteDirectConnectGatewayAssociationProposal($request);

    if ($response->deleteDirectConnectGatewayAssociationProposalResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInterconnect

<p>Deletes the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInterconnectRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteInterconnectRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInterconnectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInterconnectRequest();
    $request->deleteInterconnectRequest = new DeleteInterconnectRequest();
    $request->deleteInterconnectRequest->interconnectId = 'asperiores';
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = DeleteInterconnectXAmzTargetEnum::OVERTURE_SERVICE_DELETE_INTERCONNECT;

    $response = $sdk->sdk->deleteInterconnect($request);

    if ($response->deleteInterconnectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLag

Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLagRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteLagRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLagXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLagRequest();
    $request->deleteLagRequest = new DeleteLagRequest();
    $request->deleteLagRequest->lagId = 'nobis';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = DeleteLagXAmzTargetEnum::OVERTURE_SERVICE_DELETE_LAG;

    $response = $sdk->sdk->deleteLag($request);

    if ($response->lag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVirtualInterface

Deletes a virtual interface.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteVirtualInterfaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVirtualInterfaceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVirtualInterfaceRequest();
    $request->deleteVirtualInterfaceRequest = new DeleteVirtualInterfaceRequest();
    $request->deleteVirtualInterfaceRequest->virtualInterfaceId = 'dolor';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = DeleteVirtualInterfaceXAmzTargetEnum::OVERTURE_SERVICE_DELETE_VIRTUAL_INTERFACE;

    $response = $sdk->sdk->deleteVirtualInterface($request);

    if ($response->deleteVirtualInterfaceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~describeConnectionLoa~~

<p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for a connection.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectionLoaRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConnectionLoaRequest;
use \OpenAPI\OpenAPI\Models\Shared\LoaContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectionLoaXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConnectionLoaRequest();
    $request->describeConnectionLoaRequest = new DescribeConnectionLoaRequest();
    $request->describeConnectionLoaRequest->connectionId = 'reiciendis';
    $request->describeConnectionLoaRequest->loaContentType = LoaContentTypeEnum::APPLICATION_PDF;
    $request->describeConnectionLoaRequest->providerName = 'amet';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'odio';
    $request->xAmzTarget = DescribeConnectionLoaXAmzTargetEnum::OVERTURE_SERVICE_DESCRIBE_CONNECTION_LOA;

    $response = $sdk->sdk->describeConnectionLoa($request);

    if ($response->describeConnectionLoaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConnections

Displays the specified connection or all connections in this Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConnectionsRequest();
    $request->describeConnectionsRequest = new DescribeConnectionsRequest();
    $request->describeConnectionsRequest->connectionId = 'quaerat';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = DescribeConnectionsXAmzTargetEnum::OVERTURE_SERVICE_DESCRIBE_CONNECTIONS;

    $response = $sdk->sdk->describeConnections($request);

    if ($response->connections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~describeConnectionsOnInterconnect~~

<p>Deprecated. Use <a>DescribeHostedConnections</a> instead.</p> <p>Lists the connections that have been provisioned on the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectionsOnInterconnectRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConnectionsOnInterconnectRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectionsOnInterconnectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConnectionsOnInterconnectRequest();
    $request->describeConnectionsOnInterconnectRequest = new DescribeConnectionsOnInterconnectRequest();
    $request->describeConnectionsOnInterconnectRequest->interconnectId = 'sit';
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = DescribeConnectionsOnInterconnectXAmzTargetEnum::OVERTURE_SERVICE_DESCRIBE_CONNECTIONS_ON_INTERCONNECT;

    $response = $sdk->sdk->describeConnectionsOnInterconnect($request);

    if ($response->connections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCustomerMetadata

Get and view a list of customer agreements, along with their signed status and whether the customer is an NNIPartner, NNIPartnerV2, or a nonPartner. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCustomerMetadataRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCustomerMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCustomerMetadataRequest();
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = DescribeCustomerMetadataXAmzTargetEnum::OVERTURE_SERVICE_DESCRIBE_CUSTOMER_METADATA;

    $response = $sdk->sdk->describeCustomerMetadata($request);

    if ($response->describeCustomerMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDirectConnectGatewayAssociationProposals

Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDirectConnectGatewayAssociationProposalsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDirectConnectGatewayAssociationProposalsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDirectConnectGatewayAssociationProposalsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDirectConnectGatewayAssociationProposalsRequest();
    $request->describeDirectConnectGatewayAssociationProposalsRequest = new DescribeDirectConnectGatewayAssociationProposalsRequest();
    $request->describeDirectConnectGatewayAssociationProposalsRequest->associatedGatewayId = 'voluptate';
    $request->describeDirectConnectGatewayAssociationProposalsRequest->directConnectGatewayId = 'id';
    $request->describeDirectConnectGatewayAssociationProposalsRequest->maxResults = 906418;
    $request->describeDirectConnectGatewayAssociationProposalsRequest->nextToken = 'eius';
    $request->describeDirectConnectGatewayAssociationProposalsRequest->proposalId = 'aspernatur';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = DescribeDirectConnectGatewayAssociationProposalsXAmzTargetEnum::OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSALS;

    $response = $sdk->sdk->describeDirectConnectGatewayAssociationProposals($request);

    if ($response->describeDirectConnectGatewayAssociationProposalsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDirectConnectGatewayAssociations

<p>Lists the associations between your Direct Connect gateways and virtual private gateways and transit gateways. You must specify one of the following:</p> <ul> <li> <p>A Direct Connect gateway</p> <p>The response contains all virtual private gateways and transit gateways associated with the Direct Connect gateway.</p> </li> <li> <p>A virtual private gateway</p> <p>The response contains the Direct Connect gateway.</p> </li> <li> <p>A transit gateway</p> <p>The response contains the Direct Connect gateway.</p> </li> <li> <p>A Direct Connect gateway and a virtual private gateway</p> <p>The response contains the association between the Direct Connect gateway and virtual private gateway.</p> </li> <li> <p>A Direct Connect gateway and a transit gateway</p> <p>The response contains the association between the Direct Connect gateway and transit gateway.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDirectConnectGatewayAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDirectConnectGatewayAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDirectConnectGatewayAssociationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDirectConnectGatewayAssociationsRequest();
    $request->describeDirectConnectGatewayAssociationsRequest = new DescribeDirectConnectGatewayAssociationsRequest();
    $request->describeDirectConnectGatewayAssociationsRequest->associatedGatewayId = 'deserunt';
    $request->describeDirectConnectGatewayAssociationsRequest->associationId = 'provident';
    $request->describeDirectConnectGatewayAssociationsRequest->directConnectGatewayId = 'minima';
    $request->describeDirectConnectGatewayAssociationsRequest->maxResults = 831049;
    $request->describeDirectConnectGatewayAssociationsRequest->nextToken = 'totam';
    $request->describeDirectConnectGatewayAssociationsRequest->virtualGatewayId = 'similique';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'officiis';
    $request->xAmzTarget = DescribeDirectConnectGatewayAssociationsXAmzTargetEnum::OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAY_ASSOCIATIONS;

    $response = $sdk->sdk->describeDirectConnectGatewayAssociations($request);

    if ($response->describeDirectConnectGatewayAssociationsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDirectConnectGatewayAttachments

Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response contains the attachment between the Direct Connect gateway and the virtual interface.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDirectConnectGatewayAttachmentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDirectConnectGatewayAttachmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDirectConnectGatewayAttachmentsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDirectConnectGatewayAttachmentsRequest();
    $request->describeDirectConnectGatewayAttachmentsRequest = new DescribeDirectConnectGatewayAttachmentsRequest();
    $request->describeDirectConnectGatewayAttachmentsRequest->directConnectGatewayId = 'qui';
    $request->describeDirectConnectGatewayAttachmentsRequest->maxResults = 679880;
    $request->describeDirectConnectGatewayAttachmentsRequest->nextToken = 'a';
    $request->describeDirectConnectGatewayAttachmentsRequest->virtualInterfaceId = 'esse';
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'tempore';
    $request->xAmzTarget = DescribeDirectConnectGatewayAttachmentsXAmzTargetEnum::OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAY_ATTACHMENTS;

    $response = $sdk->sdk->describeDirectConnectGatewayAttachments($request);

    if ($response->describeDirectConnectGatewayAttachmentsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDirectConnectGateways

Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDirectConnectGatewaysRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeDirectConnectGatewaysRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDirectConnectGatewaysXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDirectConnectGatewaysRequest();
    $request->describeDirectConnectGatewaysRequest = new DescribeDirectConnectGatewaysRequest();
    $request->describeDirectConnectGatewaysRequest->directConnectGatewayId = 'accusamus';
    $request->describeDirectConnectGatewaysRequest->maxResults = 253941;
    $request->describeDirectConnectGatewaysRequest->nextToken = 'enim';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'neque';
    $request->xAmzTarget = DescribeDirectConnectGatewaysXAmzTargetEnum::OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAYS;

    $response = $sdk->sdk->describeDirectConnectGateways($request);

    if ($response->describeDirectConnectGatewaysResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeHostedConnections

<p>Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG).</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeHostedConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeHostedConnectionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeHostedConnectionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeHostedConnectionsRequest();
    $request->describeHostedConnectionsRequest = new DescribeHostedConnectionsRequest();
    $request->describeHostedConnectionsRequest->connectionId = 'sed';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'voluptas';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->xAmzTarget = DescribeHostedConnectionsXAmzTargetEnum::OVERTURE_SERVICE_DESCRIBE_HOSTED_CONNECTIONS;

    $response = $sdk->sdk->describeHostedConnections($request);

    if ($response->connections !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~describeInterconnectLoa~~

<p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for the specified interconnect.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInterconnectLoaRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeInterconnectLoaRequest;
use \OpenAPI\OpenAPI\Models\Shared\LoaContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInterconnectLoaXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeInterconnectLoaRequest();
    $request->describeInterconnectLoaRequest = new DescribeInterconnectLoaRequest();
    $request->describeInterconnectLoaRequest->interconnectId = 'qui';
    $request->describeInterconnectLoaRequest->loaContentType = LoaContentTypeEnum::APPLICATION_PDF;
    $request->describeInterconnectLoaRequest->providerName = 'cupiditate';
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->xAmzTarget = DescribeInterconnectLoaXAmzTargetEnum::OVERTURE_SERVICE_DESCRIBE_INTERCONNECT_LOA;

    $response = $sdk->sdk->describeInterconnectLoa($request);

    if ($response->describeInterconnectLoaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeInterconnects

Lists the interconnects owned by the Amazon Web Services account or only the specified interconnect.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInterconnectsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeInterconnectsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeInterconnectsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeInterconnectsRequest();
    $request->describeInterconnectsRequest = new DescribeInterconnectsRequest();
    $request->describeInterconnectsRequest->interconnectId = 'aspernatur';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestias';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = DescribeInterconnectsXAmzTargetEnum::OVERTURE_SERVICE_DESCRIBE_INTERCONNECTS;

    $response = $sdk->sdk->describeInterconnects($request);

    if ($response->interconnects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLags

Describes all your link aggregation groups (LAG) or the specified LAG.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLagsRequest();
    $request->describeLagsRequest = new DescribeLagsRequest();
    $request->describeLagsRequest->lagId = 'qui';
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = DescribeLagsXAmzTargetEnum::OVERTURE_SERVICE_DESCRIBE_LAGS;

    $response = $sdk->sdk->describeLags($request);

    if ($response->lags !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLoa

<p>Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLoaRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLoaRequest;
use \OpenAPI\OpenAPI\Models\Shared\LoaContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLoaXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLoaRequest();
    $request->describeLoaRequest = new DescribeLoaRequest();
    $request->describeLoaRequest->connectionId = 'hic';
    $request->describeLoaRequest->loaContentType = LoaContentTypeEnum::APPLICATION_PDF;
    $request->describeLoaRequest->providerName = 'voluptatem';
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = DescribeLoaXAmzTargetEnum::OVERTURE_SERVICE_DESCRIBE_LOA;

    $response = $sdk->sdk->describeLoa($request);

    if ($response->loa !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLocations

Lists the Direct Connect locations in the current Amazon Web Services Region. These are the locations that can be selected when calling <a>CreateConnection</a> or <a>CreateInterconnect</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLocationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLocationsRequest();
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = DescribeLocationsXAmzTargetEnum::OVERTURE_SERVICE_DESCRIBE_LOCATIONS;

    $response = $sdk->sdk->describeLocations($request);

    if ($response->locations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRouterConfiguration

 Details about the router. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRouterConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRouterConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRouterConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRouterConfigurationRequest();
    $request->describeRouterConfigurationRequest = new DescribeRouterConfigurationRequest();
    $request->describeRouterConfigurationRequest->routerTypeIdentifier = 'dolore';
    $request->describeRouterConfigurationRequest->virtualInterfaceId = 'labore';
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'quas';
    $request->xAmzSignedHeaders = 'itaque';
    $request->xAmzTarget = DescribeRouterConfigurationXAmzTargetEnum::OVERTURE_SERVICE_DESCRIBE_ROUTER_CONFIGURATION;

    $response = $sdk->sdk->describeRouterConfiguration($request);

    if ($response->describeRouterConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTags

Describes the tags associated with the specified Direct Connect resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTagsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTagsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTagsRequest();
    $request->describeTagsRequest = new DescribeTagsRequest();
    $request->describeTagsRequest->resourceArns = [
        'est',
    ];
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = DescribeTagsXAmzTargetEnum::OVERTURE_SERVICE_DESCRIBE_TAGS;

    $response = $sdk->sdk->describeTags($request);

    if ($response->describeTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeVirtualGateways

<p>Lists the virtual private gateways owned by the Amazon Web Services account.</p> <p>You can create one or more Direct Connect private virtual interfaces linked to a virtual private gateway.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVirtualGatewaysRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVirtualGatewaysXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeVirtualGatewaysRequest();
    $request->xAmzAlgorithm = 'quae';
    $request->xAmzContentSha256 = 'laudantium';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = DescribeVirtualGatewaysXAmzTargetEnum::OVERTURE_SERVICE_DESCRIBE_VIRTUAL_GATEWAYS;

    $response = $sdk->sdk->describeVirtualGateways($request);

    if ($response->virtualGateways !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeVirtualInterfaces

<p>Displays all virtual interfaces for an Amazon Web Services account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned.</p> <p>A virtual interface (VLAN) transmits the traffic between the Direct Connect location and the customer network.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVirtualInterfacesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeVirtualInterfacesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeVirtualInterfacesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeVirtualInterfacesRequest();
    $request->describeVirtualInterfacesRequest = new DescribeVirtualInterfacesRequest();
    $request->describeVirtualInterfacesRequest->connectionId = 'omnis';
    $request->describeVirtualInterfacesRequest->virtualInterfaceId = 'quis';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'consectetur';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = DescribeVirtualInterfacesXAmzTargetEnum::OVERTURE_SERVICE_DESCRIBE_VIRTUAL_INTERFACES;

    $response = $sdk->sdk->describeVirtualInterfaces($request);

    if ($response->virtualInterfaces !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateConnectionFromLag

<p>Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the <a>DeleteConnection</a> request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an Direct Connect Partner is automatically converted to an interconnect.</p> <p>If disassociating the connection would cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateConnectionFromLagRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateConnectionFromLagRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateConnectionFromLagXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateConnectionFromLagRequest();
    $request->disassociateConnectionFromLagRequest = new DisassociateConnectionFromLagRequest();
    $request->disassociateConnectionFromLagRequest->connectionId = 'hic';
    $request->disassociateConnectionFromLagRequest->lagId = 'distinctio';
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'similique';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'ducimus';
    $request->xAmzSignedHeaders = 'dolore';
    $request->xAmzTarget = DisassociateConnectionFromLagXAmzTargetEnum::OVERTURE_SERVICE_DISASSOCIATE_CONNECTION_FROM_LAG;

    $response = $sdk->sdk->disassociateConnectionFromLag($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateMacSecKey

Removes the association between a MAC Security (MACsec) security key and an Direct Connect dedicated connection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateMacSecKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateMacSecKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateMacSecKeyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateMacSecKeyRequest();
    $request->disassociateMacSecKeyRequest = new DisassociateMacSecKeyRequest();
    $request->disassociateMacSecKeyRequest->connectionId = 'quibusdam';
    $request->disassociateMacSecKeyRequest->secretARN = 'illum';
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'nulla';
    $request->xAmzTarget = DisassociateMacSecKeyXAmzTargetEnum::OVERTURE_SERVICE_DISASSOCIATE_MAC_SEC_KEY;

    $response = $sdk->sdk->disassociateMacSecKey($request);

    if ($response->disassociateMacSecKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listVirtualInterfaceTestHistory

Lists the virtual interface failover test history.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListVirtualInterfaceTestHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListVirtualInterfaceTestHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListVirtualInterfaceTestHistoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListVirtualInterfaceTestHistoryRequest();
    $request->listVirtualInterfaceTestHistoryRequest = new ListVirtualInterfaceTestHistoryRequest();
    $request->listVirtualInterfaceTestHistoryRequest->bgpPeers = [
        'porro',
    ];
    $request->listVirtualInterfaceTestHistoryRequest->maxResults = 981830;
    $request->listVirtualInterfaceTestHistoryRequest->nextToken = 'doloribus';
    $request->listVirtualInterfaceTestHistoryRequest->status = 'iusto';
    $request->listVirtualInterfaceTestHistoryRequest->testId = 'eligendi';
    $request->listVirtualInterfaceTestHistoryRequest->virtualInterfaceId = 'ducimus';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = ListVirtualInterfaceTestHistoryXAmzTargetEnum::OVERTURE_SERVICE_LIST_VIRTUAL_INTERFACE_TEST_HISTORY;

    $response = $sdk->sdk->listVirtualInterfaceTestHistory($request);

    if ($response->listVirtualInterfaceTestHistoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startBgpFailoverTest

<p>Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages.</p> <p>You can run the test on public, private, transit, and hosted virtual interfaces.</p> <p>You can use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html">ListVirtualInterfaceTestHistory</a> to view the virtual interface test history.</p> <p>If you need to stop the test before the test interval completes, use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html">StopBgpFailoverTest</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartBgpFailoverTestRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartBgpFailoverTestRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartBgpFailoverTestXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartBgpFailoverTestRequest();
    $request->startBgpFailoverTestRequest = new StartBgpFailoverTestRequest();
    $request->startBgpFailoverTestRequest->bgpPeers = [
        'magnam',
        'ratione',
        'ex',
        'laudantium',
    ];
    $request->startBgpFailoverTestRequest->testDurationInMinutes = 120657;
    $request->startBgpFailoverTestRequest->virtualInterfaceId = 'dolor';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'ex';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->xAmzTarget = StartBgpFailoverTestXAmzTargetEnum::OVERTURE_SERVICE_START_BGP_FAILOVER_TEST;

    $response = $sdk->sdk->startBgpFailoverTest($request);

    if ($response->startBgpFailoverTestResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopBgpFailoverTest

Stops the virtual interface failover test.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopBgpFailoverTestRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopBgpFailoverTestRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopBgpFailoverTestXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopBgpFailoverTestRequest();
    $request->stopBgpFailoverTestRequest = new StopBgpFailoverTestRequest();
    $request->stopBgpFailoverTestRequest->virtualInterfaceId = 'sapiente';
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'impedit';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'veniam';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = StopBgpFailoverTestXAmzTargetEnum::OVERTURE_SERVICE_STOP_BGP_FAILOVER_TEST;

    $response = $sdk->sdk->stopBgpFailoverTest($request);

    if ($response->stopBgpFailoverTestResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Adds the specified tags to the specified Direct Connect resource. Each resource can have a maximum of 50 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'inventore';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'minima';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::OVERTURE_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from the specified Direct Connect resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceArn = 'a';
    $request->untagResourceRequest->tagKeys = [
        'aut',
        'aut',
        'deleniti',
    ];
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'aliquam';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'inventore';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::OVERTURE_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConnection

<p>Updates the Direct Connect dedicated connection configuration.</p> <p>You can update the following parameters for a connection:</p> <ul> <li> <p>The connection name</p> </li> <li> <p>The connection's MAC Security (MACsec) encryption mode.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateConnectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConnectionRequest();
    $request->updateConnectionRequest = new UpdateConnectionRequest();
    $request->updateConnectionRequest->connectionId = 'dolorum';
    $request->updateConnectionRequest->connectionName = 'laborum';
    $request->updateConnectionRequest->encryptionMode = 'placeat';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'nulla';
    $request->xAmzTarget = UpdateConnectionXAmzTargetEnum::OVERTURE_SERVICE_UPDATE_CONNECTION;

    $response = $sdk->sdk->updateConnection($request);

    if ($response->connection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDirectConnectGateway

Updates the name of a current Direct Connect gateway.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDirectConnectGatewayRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDirectConnectGatewayRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDirectConnectGatewayXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDirectConnectGatewayRequest();
    $request->updateDirectConnectGatewayRequest = new UpdateDirectConnectGatewayRequest();
    $request->updateDirectConnectGatewayRequest->directConnectGatewayId = 'voluptas';
    $request->updateDirectConnectGatewayRequest->newDirectConnectGatewayName = 'libero';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzTarget = UpdateDirectConnectGatewayXAmzTargetEnum::OVERTURE_SERVICE_UPDATE_DIRECT_CONNECT_GATEWAY;

    $response = $sdk->sdk->updateDirectConnectGateway($request);

    if ($response->updateDirectConnectGatewayResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDirectConnectGatewayAssociation

<p>Updates the specified attributes of the Direct Connect gateway association.</p> <p>Add or remove prefixes from the association.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDirectConnectGatewayAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDirectConnectGatewayAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\RouteFilterPrefix;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDirectConnectGatewayAssociationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDirectConnectGatewayAssociationRequest();
    $request->updateDirectConnectGatewayAssociationRequest = new UpdateDirectConnectGatewayAssociationRequest();
    $request->updateDirectConnectGatewayAssociationRequest->addAllowedPrefixesToDirectConnectGateway = [
        new RouteFilterPrefix(),
        new RouteFilterPrefix(),
    ];
    $request->updateDirectConnectGatewayAssociationRequest->associationId = 'odio';
    $request->updateDirectConnectGatewayAssociationRequest->removeAllowedPrefixesToDirectConnectGateway = [
        new RouteFilterPrefix(),
        new RouteFilterPrefix(),
    ];
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->xAmzTarget = UpdateDirectConnectGatewayAssociationXAmzTargetEnum::OVERTURE_SERVICE_UPDATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION;

    $response = $sdk->sdk->updateDirectConnectGatewayAssociation($request);

    if ($response->updateDirectConnectGatewayAssociationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLag

<p>Updates the attributes of the specified link aggregation group (LAG).</p> <p>You can update the following LAG attributes:</p> <ul> <li> <p>The name of the LAG.</p> </li> <li> <p>The value for the minimum number of connections that must be operational for the LAG itself to be operational. </p> </li> <li> <p>The LAG's MACsec encryption mode.</p> <p>Amazon Web Services assigns this value to each connection which is part of the LAG.</p> </li> <li> <p>The tags</p> </li> </ul> <note> <p>If you adjust the threshold value for the minimum number of operational connections, ensure that the new value does not cause the LAG to fall below the threshold and become non-operational.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLagRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateLagRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLagXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLagRequest();
    $request->updateLagRequest = new UpdateLagRequest();
    $request->updateLagRequest->encryptionMode = 'ut';
    $request->updateLagRequest->lagId = 'eum';
    $request->updateLagRequest->lagName = 'suscipit';
    $request->updateLagRequest->minimumLinks = 826871;
    $request->xAmzAlgorithm = 'eos';
    $request->xAmzContentSha256 = 'praesentium';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = UpdateLagXAmzTargetEnum::OVERTURE_SERVICE_UPDATE_LAG;

    $response = $sdk->sdk->updateLag($request);

    if ($response->lag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVirtualInterfaceAttributes

<p>Updates the specified attributes of the specified virtual private interface.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual q interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVirtualInterfaceAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateVirtualInterfaceAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVirtualInterfaceAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVirtualInterfaceAttributesRequest();
    $request->updateVirtualInterfaceAttributesRequest = new UpdateVirtualInterfaceAttributesRequest();
    $request->updateVirtualInterfaceAttributesRequest->enableSiteLink = false;
    $request->updateVirtualInterfaceAttributesRequest->mtu = 206594;
    $request->updateVirtualInterfaceAttributesRequest->virtualInterfaceId = 'quo';
    $request->updateVirtualInterfaceAttributesRequest->virtualInterfaceName = 'illum';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'fuga';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'voluptas';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = UpdateVirtualInterfaceAttributesXAmzTargetEnum::OVERTURE_SERVICE_UPDATE_VIRTUAL_INTERFACE_ATTRIBUTES;

    $response = $sdk->sdk->updateVirtualInterfaceAttributes($request);

    if ($response->virtualInterface !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
