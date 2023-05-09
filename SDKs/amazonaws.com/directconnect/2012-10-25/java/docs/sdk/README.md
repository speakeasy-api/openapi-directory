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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcceptDirectConnectGatewayAssociationProposalRequest;
import org.openapis.openapi.models.operations.AcceptDirectConnectGatewayAssociationProposalResponse;
import org.openapis.openapi.models.operations.AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum;
import org.openapis.openapi.models.shared.AcceptDirectConnectGatewayAssociationProposalRequest;
import org.openapis.openapi.models.shared.RouteFilterPrefix;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcceptDirectConnectGatewayAssociationProposalRequest req = new AcceptDirectConnectGatewayAssociationProposalRequest(                new AcceptDirectConnectGatewayAssociationProposalRequest("delectus", "tempora", "suscipit") {{
                                overrideAllowedPrefixesToDirectConnectGateway = new org.openapis.openapi.models.shared.RouteFilterPrefix[]{{
                                    add(new RouteFilterPrefix() {{
                                        cidr = "minus";
                                    }}),
                                    add(new RouteFilterPrefix() {{
                                        cidr = "placeat";
                                    }}),
                                }};
                            }};, AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnum.OVERTURE_SERVICE_ACCEPT_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
            }};            

            AcceptDirectConnectGatewayAssociationProposalResponse res = sdk.sdk.acceptDirectConnectGatewayAssociationProposal(req);

            if (res.acceptDirectConnectGatewayAssociationProposalResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~allocateConnectionOnInterconnect~~

<p>Deprecated. Use <a>AllocateHostedConnection</a> instead.</p> <p>Creates a hosted connection on an interconnect.</p> <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllocateConnectionOnInterconnectRequest;
import org.openapis.openapi.models.operations.AllocateConnectionOnInterconnectResponse;
import org.openapis.openapi.models.operations.AllocateConnectionOnInterconnectXAmzTargetEnum;
import org.openapis.openapi.models.shared.AllocateConnectionOnInterconnectRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AllocateConnectionOnInterconnectRequest req = new AllocateConnectionOnInterconnectRequest(                new AllocateConnectionOnInterconnectRequest("veritatis", "deserunt", "perferendis", "ipsam", 832620L);, AllocateConnectionOnInterconnectXAmzTargetEnum.OVERTURE_SERVICE_ALLOCATE_CONNECTION_ON_INTERCONNECT) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quo";
                xAmzCredential = "odit";
                xAmzDate = "at";
                xAmzSecurityToken = "at";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "molestiae";
            }};            

            AllocateConnectionOnInterconnectResponse res = sdk.sdk.allocateConnectionOnInterconnect(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## allocateHostedConnection

<p>Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.</p> <p>Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. Amazon Web Services polices the hosted connection for the specified capacity and the Direct Connect Partner must also police the hosted connection for the specified capacity.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllocateHostedConnectionRequest;
import org.openapis.openapi.models.operations.AllocateHostedConnectionResponse;
import org.openapis.openapi.models.operations.AllocateHostedConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.AllocateHostedConnectionRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AllocateHostedConnectionRequest req = new AllocateHostedConnectionRequest(                new AllocateHostedConnectionRequest("quod", "esse", "totam", "porro", 678880L) {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("occaecati") {{
                                        key = "nam";
                                        value = "officia";
                                    }}),
                                }};
                            }};, AllocateHostedConnectionXAmzTargetEnum.OVERTURE_SERVICE_ALLOCATE_HOSTED_CONNECTION) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "hic";
                xAmzDate = "optio";
                xAmzSecurityToken = "totam";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "commodi";
            }};            

            AllocateHostedConnectionResponse res = sdk.sdk.allocateHostedConnection(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## allocatePrivateVirtualInterface

<p>Provisions a private virtual interface to be owned by the specified Amazon Web Services account.</p> <p>Virtual interfaces created using this action must be confirmed by the owner using <a>ConfirmPrivateVirtualInterface</a>. Until then, the virtual interface is in the <code>Confirming</code> state and is not available to handle traffic.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllocatePrivateVirtualInterfaceRequest;
import org.openapis.openapi.models.operations.AllocatePrivateVirtualInterfaceResponse;
import org.openapis.openapi.models.operations.AllocatePrivateVirtualInterfaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddressFamilyEnum;
import org.openapis.openapi.models.shared.AllocatePrivateVirtualInterfaceRequest;
import org.openapis.openapi.models.shared.NewPrivateVirtualInterfaceAllocation;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AllocatePrivateVirtualInterfaceRequest req = new AllocatePrivateVirtualInterfaceRequest(                new AllocatePrivateVirtualInterfaceRequest("modi",                 new NewPrivateVirtualInterfaceAllocation(186332L, "impedit", 736918L) {{
                                                addressFamily = AddressFamilyEnum.IPV4;
                                                amazonAddress = "ipsum";
                                                authKey = "excepturi";
                                                customerAddress = "aspernatur";
                                                mtu = 18789L;
                                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                    add(new Tag("iste") {{
                                                        key = "natus";
                                                        value = "sed";
                                                    }}),
                                                    add(new Tag("laboriosam") {{
                                                        key = "dolor";
                                                        value = "natus";
                                                    }}),
                                                }};
                                            }};, "hic");, AllocatePrivateVirtualInterfaceXAmzTargetEnum.OVERTURE_SERVICE_ALLOCATE_PRIVATE_VIRTUAL_INTERFACE) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "in";
                xAmzDate = "corporis";
                xAmzSecurityToken = "iste";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "saepe";
            }};            

            AllocatePrivateVirtualInterfaceResponse res = sdk.sdk.allocatePrivateVirtualInterface(req);

            if (res.virtualInterface != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## allocatePublicVirtualInterface

<p>Provisions a public virtual interface to be owned by the specified Amazon Web Services account.</p> <p>The owner of a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web Services account.</p> <p>Virtual interfaces created using this function must be confirmed by the owner using <a>ConfirmPublicVirtualInterface</a>. Until this step has been completed, the virtual interface is in the <code>confirming</code> state and is not available to handle traffic.</p> <p>When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllocatePublicVirtualInterfaceRequest;
import org.openapis.openapi.models.operations.AllocatePublicVirtualInterfaceResponse;
import org.openapis.openapi.models.operations.AllocatePublicVirtualInterfaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddressFamilyEnum;
import org.openapis.openapi.models.shared.AllocatePublicVirtualInterfaceRequest;
import org.openapis.openapi.models.shared.NewPublicVirtualInterfaceAllocation;
import org.openapis.openapi.models.shared.RouteFilterPrefix;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AllocatePublicVirtualInterfaceRequest req = new AllocatePublicVirtualInterfaceRequest(                new AllocatePublicVirtualInterfaceRequest("architecto",                 new NewPublicVirtualInterfaceAllocation(60225L, "reiciendis", 666767L) {{
                                                addressFamily = AddressFamilyEnum.IPV6;
                                                amazonAddress = "laborum";
                                                authKey = "dolores";
                                                customerAddress = "dolorem";
                                                routeFilterPrefixes = new org.openapis.openapi.models.shared.RouteFilterPrefix[]{{
                                                    add(new RouteFilterPrefix() {{
                                                        cidr = "explicabo";
                                                    }}),
                                                    add(new RouteFilterPrefix() {{
                                                        cidr = "nobis";
                                                    }}),
                                                }};
                                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                    add(new Tag("minima") {{
                                                        key = "omnis";
                                                        value = "nemo";
                                                    }}),
                                                    add(new Tag("iure") {{
                                                        key = "excepturi";
                                                        value = "accusantium";
                                                    }}),
                                                }};
                                            }};, "culpa");, AllocatePublicVirtualInterfaceXAmzTargetEnum.OVERTURE_SERVICE_ALLOCATE_PUBLIC_VIRTUAL_INTERFACE) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            AllocatePublicVirtualInterfaceResponse res = sdk.sdk.allocatePublicVirtualInterface(req);

            if (res.virtualInterface != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## allocateTransitVirtualInterface

<p>Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this type of interface to connect a transit gateway to your Direct Connect gateway.</p> <p>The owner of a connection provisions a transit virtual interface to be owned by the specified Amazon Web Services account.</p> <p>After you create a transit virtual interface, it must be confirmed by the owner using <a>ConfirmTransitVirtualInterface</a>. Until this step has been completed, the transit virtual interface is in the <code>requested</code> state and is not available to handle traffic.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllocateTransitVirtualInterfaceRequest;
import org.openapis.openapi.models.operations.AllocateTransitVirtualInterfaceResponse;
import org.openapis.openapi.models.operations.AllocateTransitVirtualInterfaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddressFamilyEnum;
import org.openapis.openapi.models.shared.AllocateTransitVirtualInterfaceRequest;
import org.openapis.openapi.models.shared.NewTransitVirtualInterfaceAllocation;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AllocateTransitVirtualInterfaceRequest req = new AllocateTransitVirtualInterfaceRequest(                new AllocateTransitVirtualInterfaceRequest("mollitia",                 new NewTransitVirtualInterfaceAllocation() {{
                                                addressFamily = AddressFamilyEnum.IPV6;
                                                amazonAddress = "numquam";
                                                asn = 414369L;
                                                authKey = "quam";
                                                customerAddress = "molestiae";
                                                mtu = 244425L;
                                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                    add(new Tag("vitae") {{
                                                        key = "quia";
                                                        value = "quis";
                                                    }}),
                                                    add(new Tag("enim") {{
                                                        key = "laborum";
                                                        value = "animi";
                                                    }}),
                                                    add(new Tag("sequi") {{
                                                        key = "odit";
                                                        value = "quo";
                                                    }}),
                                                }};
                                                virtualInterfaceName = "tenetur";
                                                vlan = 368725L;
                                            }};, "id");, AllocateTransitVirtualInterfaceXAmzTargetEnum.OVERTURE_SERVICE_ALLOCATE_TRANSIT_VIRTUAL_INTERFACE) {{
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quasi";
                xAmzDate = "error";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "quasi";
            }};            

            AllocateTransitVirtualInterfaceResponse res = sdk.sdk.allocateTransitVirtualInterface(req);

            if (res.allocateTransitVirtualInterfaceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateConnectionWithLag

<p>Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to Amazon Web Services is interrupted). The connection must be hosted on the same Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing the connection would cause the original LAG to fall below its setting for minimum number of operational connections, the request fails.</p> <p>Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG.</p> <p>For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateConnectionWithLagRequest;
import org.openapis.openapi.models.operations.AssociateConnectionWithLagResponse;
import org.openapis.openapi.models.operations.AssociateConnectionWithLagXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateConnectionWithLagRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateConnectionWithLagRequest req = new AssociateConnectionWithLagRequest(                new AssociateConnectionWithLagRequest("voluptatibus", "vero");, AssociateConnectionWithLagXAmzTargetEnum.OVERTURE_SERVICE_ASSOCIATE_CONNECTION_WITH_LAG) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "voluptatibus";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "cum";
            }};            

            AssociateConnectionWithLagResponse res = sdk.sdk.associateConnectionWithLag(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateHostedConnection

<p>Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to Amazon Web Services as it is being migrated.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateHostedConnectionRequest;
import org.openapis.openapi.models.operations.AssociateHostedConnectionResponse;
import org.openapis.openapi.models.operations.AssociateHostedConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateHostedConnectionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateHostedConnectionRequest req = new AssociateHostedConnectionRequest(                new AssociateHostedConnectionRequest("doloremque", "reprehenderit");, AssociateHostedConnectionXAmzTargetEnum.OVERTURE_SERVICE_ASSOCIATE_HOSTED_CONNECTION) {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "dicta";
                xAmzDate = "corporis";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "dicta";
            }};            

            AssociateHostedConnectionResponse res = sdk.sdk.associateHostedConnection(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateMacSecKey

<p>Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with an Direct Connect dedicated connection.</p> <p>You must supply either the <code>secretARN,</code> or the CKN/CAK (<code>ckn</code> and <code>cak</code>) pair in the request.</p> <p>For information about MAC Security (MACsec) key considerations, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-key-consideration">MACsec pre-shared CKN/CAK key considerations </a> in the <i>Direct Connect User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateMacSecKeyRequest;
import org.openapis.openapi.models.operations.AssociateMacSecKeyResponse;
import org.openapis.openapi.models.operations.AssociateMacSecKeyXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateMacSecKeyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateMacSecKeyRequest req = new AssociateMacSecKeyRequest(                new AssociateMacSecKeyRequest("enim") {{
                                cak = "accusamus";
                                ckn = "commodi";
                                secretARN = "repudiandae";
                            }};, AssociateMacSecKeyXAmzTargetEnum.OVERTURE_SERVICE_ASSOCIATE_MAC_SEC_KEY) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "ipsum";
                xAmzCredential = "quidem";
                xAmzDate = "molestias";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "modi";
            }};            

            AssociateMacSecKeyResponse res = sdk.sdk.associateMacSecKey(req);

            if (res.associateMacSecKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateVirtualInterface

<p>Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to Amazon Web Services is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails.</p> <p>Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using <a>AssociateHostedConnection</a>.</p> <p>To reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface itself or the connection to which the virtual interface is currently associated. Additionally, the requester must own the connection or LAG for the association.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateVirtualInterfaceRequest;
import org.openapis.openapi.models.operations.AssociateVirtualInterfaceResponse;
import org.openapis.openapi.models.operations.AssociateVirtualInterfaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateVirtualInterfaceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateVirtualInterfaceRequest req = new AssociateVirtualInterfaceRequest(                new AssociateVirtualInterfaceRequest("rem", "voluptates");, AssociateVirtualInterfaceXAmzTargetEnum.OVERTURE_SERVICE_ASSOCIATE_VIRTUAL_INTERFACE) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "sint";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "enim";
            }};            

            AssociateVirtualInterfaceResponse res = sdk.sdk.associateVirtualInterface(req);

            if (res.virtualInterface != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmConnection

<p>Confirms the creation of the specified hosted connection on an interconnect.</p> <p>Upon creation, the hosted connection is initially in the <code>Ordering</code> state, and remains in this state until the owner confirms creation of the hosted connection.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmConnectionRequest;
import org.openapis.openapi.models.operations.ConfirmConnectionResponse;
import org.openapis.openapi.models.operations.ConfirmConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConfirmConnectionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConfirmConnectionRequest req = new ConfirmConnectionRequest(                new ConfirmConnectionRequest("est");, ConfirmConnectionXAmzTargetEnum.OVERTURE_SERVICE_CONFIRM_CONNECTION) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "deserunt";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "modi";
            }};            

            ConfirmConnectionResponse res = sdk.sdk.confirmConnection(req);

            if (res.confirmConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmCustomerAgreement

 The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmCustomerAgreementRequest;
import org.openapis.openapi.models.operations.ConfirmCustomerAgreementResponse;
import org.openapis.openapi.models.operations.ConfirmCustomerAgreementXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConfirmCustomerAgreementRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConfirmCustomerAgreementRequest req = new ConfirmCustomerAgreementRequest(                new ConfirmCustomerAgreementRequest() {{
                                agreementName = "aliquid";
                            }};, ConfirmCustomerAgreementXAmzTargetEnum.OVERTURE_SERVICE_CONFIRM_CUSTOMER_AGREEMENT) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "quos";
                xAmzCredential = "perferendis";
                xAmzDate = "magni";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "alias";
            }};            

            ConfirmCustomerAgreementResponse res = sdk.sdk.confirmCustomerAgreement(req);

            if (res.confirmCustomerAgreementResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmPrivateVirtualInterface

<p>Accepts ownership of a private virtual interface created by another Amazon Web Services account.</p> <p>After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmPrivateVirtualInterfaceRequest;
import org.openapis.openapi.models.operations.ConfirmPrivateVirtualInterfaceResponse;
import org.openapis.openapi.models.operations.ConfirmPrivateVirtualInterfaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConfirmPrivateVirtualInterfaceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConfirmPrivateVirtualInterfaceRequest req = new ConfirmPrivateVirtualInterfaceRequest(                new ConfirmPrivateVirtualInterfaceRequest("dolorum") {{
                                directConnectGatewayId = "excepturi";
                                virtualGatewayId = "tempora";
                            }};, ConfirmPrivateVirtualInterfaceXAmzTargetEnum.OVERTURE_SERVICE_CONFIRM_PRIVATE_VIRTUAL_INTERFACE) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "labore";
                xAmzDate = "delectus";
                xAmzSecurityToken = "eum";
                xAmzSignature = "non";
                xAmzSignedHeaders = "eligendi";
            }};            

            ConfirmPrivateVirtualInterfaceResponse res = sdk.sdk.confirmPrivateVirtualInterface(req);

            if (res.confirmPrivateVirtualInterfaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmPublicVirtualInterface

<p>Accepts ownership of a public virtual interface created by another Amazon Web Services account.</p> <p>After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmPublicVirtualInterfaceRequest;
import org.openapis.openapi.models.operations.ConfirmPublicVirtualInterfaceResponse;
import org.openapis.openapi.models.operations.ConfirmPublicVirtualInterfaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConfirmPublicVirtualInterfaceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConfirmPublicVirtualInterfaceRequest req = new ConfirmPublicVirtualInterfaceRequest(                new ConfirmPublicVirtualInterfaceRequest("aliquid");, ConfirmPublicVirtualInterfaceXAmzTargetEnum.OVERTURE_SERVICE_CONFIRM_PUBLIC_VIRTUAL_INTERFACE) {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "sint";
                xAmzDate = "officia";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "a";
            }};            

            ConfirmPublicVirtualInterfaceResponse res = sdk.sdk.confirmPublicVirtualInterface(req);

            if (res.confirmPublicVirtualInterfaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## confirmTransitVirtualInterface

<p>Accepts ownership of a transit virtual interface created by another Amazon Web Services account.</p> <p> After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfirmTransitVirtualInterfaceRequest;
import org.openapis.openapi.models.operations.ConfirmTransitVirtualInterfaceResponse;
import org.openapis.openapi.models.operations.ConfirmTransitVirtualInterfaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConfirmTransitVirtualInterfaceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConfirmTransitVirtualInterfaceRequest req = new ConfirmTransitVirtualInterfaceRequest(                new ConfirmTransitVirtualInterfaceRequest("in", "in");, ConfirmTransitVirtualInterfaceXAmzTargetEnum.OVERTURE_SERVICE_CONFIRM_TRANSIT_VIRTUAL_INTERFACE) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "rerum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "facere";
            }};            

            ConfirmTransitVirtualInterfaceResponse res = sdk.sdk.confirmTransitVirtualInterface(req);

            if (res.confirmTransitVirtualInterfaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBGPPeer

<p>Creates a BGP peer on the specified virtual interface.</p> <p>You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access Amazon Web Services resources that also use that address family.</p> <p>If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot be in the same address family as an existing BGP peer on the virtual interface.</p> <p>When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p> <important> <p>If you let Amazon Web Services auto-assign IPv4 addresses, a /30 CIDR will be allocated from 169.254.0.0/16. Amazon Web Services does not recommend this option if you intend to use the customer router peer IP address as the source and destination for traffic. Instead you should use RFC 1918 or other addressing, and specify the address yourself. For more information about RFC 1918 see <a href="https://datatracker.ietf.org/doc/html/rfc1918"> Address Allocation for Private Internets</a>.</p> </important> <p>For a public virtual interface, the Autonomous System Number (ASN) must be private or already on the allow list for the virtual interface.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBGPPeerRequest;
import org.openapis.openapi.models.operations.CreateBGPPeerResponse;
import org.openapis.openapi.models.operations.CreateBGPPeerXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddressFamilyEnum;
import org.openapis.openapi.models.shared.CreateBGPPeerRequest;
import org.openapis.openapi.models.shared.NewBGPPeer;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBGPPeerRequest req = new CreateBGPPeerRequest(                new CreateBGPPeerRequest() {{
                                newBGPPeer = new NewBGPPeer() {{
                                    addressFamily = AddressFamilyEnum.IPV4;
                                    amazonAddress = "laborum";
                                    asn = 881104L;
                                    authKey = "non";
                                    customerAddress = "occaecati";
                                }};;
                                virtualInterfaceId = "enim";
                            }};, CreateBGPPeerXAmzTargetEnum.OVERTURE_SERVICE_CREATE_BGP_PEER) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "quidem";
                xAmzDate = "provident";
                xAmzSecurityToken = "nam";
                xAmzSignature = "id";
                xAmzSignedHeaders = "blanditiis";
            }};            

            CreateBGPPeerResponse res = sdk.sdk.createBGPPeer(req);

            if (res.createBGPPeerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConnection

<p>Creates a connection between a customer network and a specific Direct Connect location.</p> <p>A connection links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an Direct Connect router.</p> <p>To find the locations for your Region, use <a>DescribeLocations</a>.</p> <p>You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection is created.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConnectionRequest;
import org.openapis.openapi.models.operations.CreateConnectionResponse;
import org.openapis.openapi.models.operations.CreateConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateConnectionRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConnectionRequest req = new CreateConnectionRequest(                new CreateConnectionRequest("sapiente", "amet", "deserunt") {{
                                lagId = "nisi";
                                providerName = "vel";
                                requestMACSec = false;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("perferendis") {{
                                        key = "omnis";
                                        value = "molestiae";
                                    }}),
                                    add(new Tag("distinctio") {{
                                        key = "nihil";
                                        value = "magnam";
                                    }}),
                                    add(new Tag("labore") {{
                                        key = "id";
                                        value = "labore";
                                    }}),
                                }};
                            }};, CreateConnectionXAmzTargetEnum.OVERTURE_SERVICE_CREATE_CONNECTION) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "natus";
                xAmzCredential = "nobis";
                xAmzDate = "eum";
                xAmzSecurityToken = "vero";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "architecto";
            }};            

            CreateConnectionResponse res = sdk.sdk.createConnection(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDirectConnectGateway

Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any Amazon Web Services Region after it is created. The virtual interfaces and virtual private gateways that are connected through a Direct Connect gateway can be in different Amazon Web Services Regions. This enables you to connect to a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic between them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDirectConnectGatewayRequest;
import org.openapis.openapi.models.operations.CreateDirectConnectGatewayResponse;
import org.openapis.openapi.models.operations.CreateDirectConnectGatewayXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDirectConnectGatewayRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDirectConnectGatewayRequest req = new CreateDirectConnectGatewayRequest(                new CreateDirectConnectGatewayRequest("et") {{
                                amazonSideAsn = 569965L;
                            }};, CreateDirectConnectGatewayXAmzTargetEnum.OVERTURE_SERVICE_CREATE_DIRECT_CONNECT_GATEWAY) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "provident";
                xAmzCredential = "quos";
                xAmzDate = "sint";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "reiciendis";
            }};            

            CreateDirectConnectGatewayResponse res = sdk.sdk.createDirectConnectGateway(req);

            if (res.createDirectConnectGatewayResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDirectConnectGatewayAssociation

Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDirectConnectGatewayAssociationRequest;
import org.openapis.openapi.models.operations.CreateDirectConnectGatewayAssociationResponse;
import org.openapis.openapi.models.operations.CreateDirectConnectGatewayAssociationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDirectConnectGatewayAssociationRequest;
import org.openapis.openapi.models.shared.RouteFilterPrefix;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDirectConnectGatewayAssociationRequest req = new CreateDirectConnectGatewayAssociationRequest(                new CreateDirectConnectGatewayAssociationRequest("ad") {{
                                addAllowedPrefixesToDirectConnectGateway = new org.openapis.openapi.models.shared.RouteFilterPrefix[]{{
                                    add(new RouteFilterPrefix() {{
                                        cidr = "dolor";
                                    }}),
                                    add(new RouteFilterPrefix() {{
                                        cidr = "necessitatibus";
                                    }}),
                                }};
                                gatewayId = "odit";
                                virtualGatewayId = "nemo";
                            }};, CreateDirectConnectGatewayAssociationXAmzTargetEnum.OVERTURE_SERVICE_CREATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "iure";
                xAmzCredential = "doloribus";
                xAmzDate = "debitis";
                xAmzSecurityToken = "eius";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "deleniti";
            }};            

            CreateDirectConnectGatewayAssociationResponse res = sdk.sdk.createDirectConnectGatewayAssociation(req);

            if (res.createDirectConnectGatewayAssociationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDirectConnectGatewayAssociationProposal

<p>Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway.</p> <p>You can associate a Direct Connect gateway and virtual private gateway or transit gateway that is owned by any Amazon Web Services account. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDirectConnectGatewayAssociationProposalRequest;
import org.openapis.openapi.models.operations.CreateDirectConnectGatewayAssociationProposalResponse;
import org.openapis.openapi.models.operations.CreateDirectConnectGatewayAssociationProposalXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateDirectConnectGatewayAssociationProposalRequest;
import org.openapis.openapi.models.shared.RouteFilterPrefix;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDirectConnectGatewayAssociationProposalRequest req = new CreateDirectConnectGatewayAssociationProposalRequest(                new CreateDirectConnectGatewayAssociationProposalRequest("in", "architecto", "architecto") {{
                                addAllowedPrefixesToDirectConnectGateway = new org.openapis.openapi.models.shared.RouteFilterPrefix[]{{
                                    add(new RouteFilterPrefix() {{
                                        cidr = "ullam";
                                    }}),
                                    add(new RouteFilterPrefix() {{
                                        cidr = "expedita";
                                    }}),
                                    add(new RouteFilterPrefix() {{
                                        cidr = "nihil";
                                    }}),
                                    add(new RouteFilterPrefix() {{
                                        cidr = "repellat";
                                    }}),
                                }};
                                removeAllowedPrefixesToDirectConnectGateway = new org.openapis.openapi.models.shared.RouteFilterPrefix[]{{
                                    add(new RouteFilterPrefix() {{
                                        cidr = "sed";
                                    }}),
                                    add(new RouteFilterPrefix() {{
                                        cidr = "saepe";
                                    }}),
                                    add(new RouteFilterPrefix() {{
                                        cidr = "pariatur";
                                    }}),
                                    add(new RouteFilterPrefix() {{
                                        cidr = "accusantium";
                                    }}),
                                }};
                            }};, CreateDirectConnectGatewayAssociationProposalXAmzTargetEnum.OVERTURE_SERVICE_CREATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "natus";
                xAmzDate = "magni";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "illum";
            }};            

            CreateDirectConnectGatewayAssociationProposalResponse res = sdk.sdk.createDirectConnectGatewayAssociationProposal(req);

            if (res.createDirectConnectGatewayAssociationProposalResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createInterconnect

<p>Creates an interconnect between an Direct Connect Partner's network and a specific Direct Connect location.</p> <p>An interconnect is a connection that is capable of hosting other connections. The Direct Connect Partner can use an interconnect to provide Direct Connect hosted connections to customers through their own network services. Like a standard connection, an interconnect links the partner's network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an Direct Connect router.</p> <p>You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect is created.</p> <p>For each end customer, the Direct Connect Partner provisions a connection on their interconnect by calling <a>AllocateHostedConnection</a>. The end customer can then connect to Amazon Web Services resources by creating a virtual interface on their connection, using the VLAN assigned to them by the Direct Connect Partner.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateInterconnectRequest;
import org.openapis.openapi.models.operations.CreateInterconnectResponse;
import org.openapis.openapi.models.operations.CreateInterconnectXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateInterconnectRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateInterconnectRequest req = new CreateInterconnectRequest(                new CreateInterconnectRequest("maxime", "ea", "excepturi") {{
                                lagId = "odit";
                                providerName = "ea";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("quidem") {{
                                        key = "ab";
                                        value = "maiores";
                                    }}),
                                }};
                            }};, CreateInterconnectXAmzTargetEnum.OVERTURE_SERVICE_CREATE_INTERCONNECT) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "autem";
                xAmzDate = "nam";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "nemo";
            }};            

            CreateInterconnectResponse res = sdk.sdk.createInterconnect(req);

            if (res.interconnect != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLag

<p>Creates a link aggregation group (LAG) with the specified number of bundled physical dedicated connections between the customer network and a specific Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a single interface.</p> <p>All connections in a LAG must use the same bandwidth (either 1Gbps or 10Gbps) and must terminate at the same Direct Connect endpoint.</p> <p>You can have up to 10 dedicated connections per LAG. Regardless of this limit, if you request more connections for the LAG than Direct Connect can allocate on a single endpoint, no LAG is created.</p> <p>You can specify an existing physical dedicated connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG will be created on the same Direct Connect endpoint to which the dedicated connection terminates. Any virtual interfaces associated with the dedicated connection are automatically disassociated and re-associated with the LAG. The connection ID does not change.</p> <p>If the Amazon Web Services account used to create a LAG is a registered Direct Connect Partner, the LAG is automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual interfaces cannot be directly configured.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLagRequest;
import org.openapis.openapi.models.operations.CreateLagResponse;
import org.openapis.openapi.models.operations.CreateLagXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateLagRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateLagRequest req = new CreateLagRequest(                new CreateLagRequest("perferendis", "fugiat", "amet", 11714L) {{
                                childConnectionTags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("libero") {{
                                        key = "corporis";
                                        value = "hic";
                                    }}),
                                    add(new Tag("quis") {{
                                        key = "nobis";
                                        value = "dolores";
                                    }}),
                                    add(new Tag("eaque") {{
                                        key = "totam";
                                        value = "dignissimos";
                                    }}),
                                    add(new Tag("eos") {{
                                        key = "quis";
                                        value = "nesciunt";
                                    }}),
                                }};
                                connectionId = "perferendis";
                                providerName = "dolores";
                                requestMACSec = false;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("vero") {{
                                        key = "quam";
                                        value = "dolor";
                                    }}),
                                    add(new Tag("recusandae") {{
                                        key = "nostrum";
                                        value = "hic";
                                    }}),
                                    add(new Tag("perspiciatis") {{
                                        key = "omnis";
                                        value = "facilis";
                                    }}),
                                    add(new Tag("consequuntur") {{
                                        key = "voluptatem";
                                        value = "porro";
                                    }}),
                                }};
                            }};, CreateLagXAmzTargetEnum.OVERTURE_SERVICE_CREATE_LAG) {{
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "error";
                xAmzCredential = "eaque";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "asperiores";
            }};            

            CreateLagResponse res = sdk.sdk.createLag(req);

            if (res.lag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPrivateVirtualInterface

<p>Creates a private virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple VPCs, including VPCs in different Amazon Web Services Regions. Connecting the private virtual interface to a VGW only provides access to a single VPC within the same Region.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePrivateVirtualInterfaceRequest;
import org.openapis.openapi.models.operations.CreatePrivateVirtualInterfaceResponse;
import org.openapis.openapi.models.operations.CreatePrivateVirtualInterfaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddressFamilyEnum;
import org.openapis.openapi.models.shared.CreatePrivateVirtualInterfaceRequest;
import org.openapis.openapi.models.shared.NewPrivateVirtualInterface;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePrivateVirtualInterfaceRequest req = new CreatePrivateVirtualInterfaceRequest(                new CreatePrivateVirtualInterfaceRequest("modi",                 new NewPrivateVirtualInterface(613966L, "dolorum", 535633L) {{
                                                addressFamily = AddressFamilyEnum.IPV6;
                                                amazonAddress = "provident";
                                                authKey = "nobis";
                                                customerAddress = "libero";
                                                directConnectGatewayId = "delectus";
                                                enableSiteLink = false;
                                                mtu = 311945L;
                                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                    add(new Tag("dolorem") {{
                                                        key = "aliquid";
                                                        value = "dolorem";
                                                    }}),
                                                    add(new Tag("ipsum") {{
                                                        key = "dolor";
                                                        value = "qui";
                                                    }}),
                                                    add(new Tag("cum") {{
                                                        key = "hic";
                                                        value = "excepturi";
                                                    }}),
                                                }};
                                                virtualGatewayId = "voluptate";
                                            }};);, CreatePrivateVirtualInterfaceXAmzTargetEnum.OVERTURE_SERVICE_CREATE_PRIVATE_VIRTUAL_INTERFACE) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "amet";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "ipsa";
            }};            

            CreatePrivateVirtualInterfaceResponse res = sdk.sdk.createPrivateVirtualInterface(req);

            if (res.virtualInterface != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPublicVirtualInterface

<p>Creates a public virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A public virtual interface supports sending traffic to public services of Amazon Web Services such as Amazon S3.</p> <p>When creating an IPv6 public virtual interface (<code>addressFamily</code> is <code>ipv6</code>), leave the <code>customer</code> and <code>amazon</code> address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePublicVirtualInterfaceRequest;
import org.openapis.openapi.models.operations.CreatePublicVirtualInterfaceResponse;
import org.openapis.openapi.models.operations.CreatePublicVirtualInterfaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddressFamilyEnum;
import org.openapis.openapi.models.shared.CreatePublicVirtualInterfaceRequest;
import org.openapis.openapi.models.shared.NewPublicVirtualInterface;
import org.openapis.openapi.models.shared.RouteFilterPrefix;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreatePublicVirtualInterfaceRequest req = new CreatePublicVirtualInterfaceRequest(                new CreatePublicVirtualInterfaceRequest("iure",                 new NewPublicVirtualInterface(487838L, "quaerat", 881005L) {{
                                                addressFamily = AddressFamilyEnum.IPV6;
                                                amazonAddress = "voluptatibus";
                                                authKey = "voluptas";
                                                customerAddress = "natus";
                                                routeFilterPrefixes = new org.openapis.openapi.models.shared.RouteFilterPrefix[]{{
                                                    add(new RouteFilterPrefix() {{
                                                        cidr = "atque";
                                                    }}),
                                                }};
                                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                    add(new Tag("soluta") {{
                                                        key = "fugiat";
                                                        value = "ab";
                                                    }}),
                                                }};
                                            }};);, CreatePublicVirtualInterfaceXAmzTargetEnum.OVERTURE_SERVICE_CREATE_PUBLIC_VIRTUAL_INTERFACE) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "voluptate";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            CreatePublicVirtualInterfaceResponse res = sdk.sdk.createPublicVirtualInterface(req);

            if (res.virtualInterface != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTransitVirtualInterface

<p>Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway.</p> <important> <p>If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails.</p> </important> <p>A jumbo MTU value must be either 1500 or 8500. No other values will be accepted. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTransitVirtualInterfaceRequest;
import org.openapis.openapi.models.operations.CreateTransitVirtualInterfaceResponse;
import org.openapis.openapi.models.operations.CreateTransitVirtualInterfaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddressFamilyEnum;
import org.openapis.openapi.models.shared.CreateTransitVirtualInterfaceRequest;
import org.openapis.openapi.models.shared.NewTransitVirtualInterface;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTransitVirtualInterfaceRequest req = new CreateTransitVirtualInterfaceRequest(                new CreateTransitVirtualInterfaceRequest("asperiores",                 new NewTransitVirtualInterface() {{
                                                addressFamily = AddressFamilyEnum.IPV4;
                                                amazonAddress = "ipsum";
                                                asn = 456015L;
                                                authKey = "id";
                                                customerAddress = "saepe";
                                                directConnectGatewayId = "eius";
                                                enableSiteLink = false;
                                                mtu = 137220L;
                                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                                    add(new Tag("accusamus") {{
                                                        key = "amet";
                                                        value = "optio";
                                                    }}),
                                                }};
                                                virtualInterfaceName = "ad";
                                                vlan = 904425L;
                                            }};);, CreateTransitVirtualInterfaceXAmzTargetEnum.OVERTURE_SERVICE_CREATE_TRANSIT_VIRTUAL_INTERFACE) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "provident";
                xAmzDate = "minima";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "similique";
            }};            

            CreateTransitVirtualInterfaceResponse res = sdk.sdk.createTransitVirtualInterface(req);

            if (res.createTransitVirtualInterfaceResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBGPPeer

<p>Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.</p> <p>You cannot delete the last BGP peer from a virtual interface.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBGPPeerRequest;
import org.openapis.openapi.models.operations.DeleteBGPPeerResponse;
import org.openapis.openapi.models.operations.DeleteBGPPeerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteBGPPeerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBGPPeerRequest req = new DeleteBGPPeerRequest(                new DeleteBGPPeerRequest() {{
                                asn = 872651L;
                                bgpPeerId = "quaerat";
                                customerAddress = "tempora";
                                virtualInterfaceId = "vel";
                            }};, DeleteBGPPeerXAmzTargetEnum.OVERTURE_SERVICE_DELETE_BGP_PEER) {{
                xAmzAlgorithm = "quod";
                xAmzContentSha256 = "officiis";
                xAmzCredential = "qui";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "a";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "harum";
            }};            

            DeleteBGPPeerResponse res = sdk.sdk.deleteBGPPeer(req);

            if (res.deleteBGPPeerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConnection

<p>Deletes the specified connection.</p> <p>Deleting a connection only stops the Direct Connect port hour and data transfer charges. If you are partnering with any third parties to connect with the Direct Connect location, you must cancel your service with them separately.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectionRequest;
import org.openapis.openapi.models.operations.DeleteConnectionResponse;
import org.openapis.openapi.models.operations.DeleteConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteConnectionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConnectionRequest req = new DeleteConnectionRequest(                new DeleteConnectionRequest("ipsum");, DeleteConnectionXAmzTargetEnum.OVERTURE_SERVICE_DELETE_CONNECTION) {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "amet";
                xAmzDate = "tempore";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "enim";
            }};            

            DeleteConnectionResponse res = sdk.sdk.deleteConnection(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDirectConnectGateway

Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached to the Direct Connect gateway and disassociate all virtual private gateways associated with the Direct Connect gateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDirectConnectGatewayRequest;
import org.openapis.openapi.models.operations.DeleteDirectConnectGatewayResponse;
import org.openapis.openapi.models.operations.DeleteDirectConnectGatewayXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDirectConnectGatewayRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDirectConnectGatewayRequest req = new DeleteDirectConnectGatewayRequest(                new DeleteDirectConnectGatewayRequest("sapiente");, DeleteDirectConnectGatewayXAmzTargetEnum.OVERTURE_SERVICE_DELETE_DIRECT_CONNECT_GATEWAY) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "sit";
                xAmzDate = "expedita";
                xAmzSecurityToken = "neque";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "vel";
            }};            

            DeleteDirectConnectGatewayResponse res = sdk.sdk.deleteDirectConnectGateway(req);

            if (res.deleteDirectConnectGatewayResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDirectConnectGatewayAssociation

<p>Deletes the association between the specified Direct Connect gateway and virtual private gateway.</p> <p>We recommend that you specify the <code>associationID</code> to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the <code>virtualGatewayId</code> and <code>directConnectGatewayId</code> to delete an association.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDirectConnectGatewayAssociationRequest;
import org.openapis.openapi.models.operations.DeleteDirectConnectGatewayAssociationResponse;
import org.openapis.openapi.models.operations.DeleteDirectConnectGatewayAssociationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDirectConnectGatewayAssociationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDirectConnectGatewayAssociationRequest req = new DeleteDirectConnectGatewayAssociationRequest(                new DeleteDirectConnectGatewayAssociationRequest() {{
                                associationId = "voluptas";
                                directConnectGatewayId = "deserunt";
                                virtualGatewayId = "quam";
                            }};, DeleteDirectConnectGatewayAssociationXAmzTargetEnum.OVERTURE_SERVICE_DELETE_DIRECT_CONNECT_GATEWAY_ASSOCIATION) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "qui";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "soluta";
            }};            

            DeleteDirectConnectGatewayAssociationResponse res = sdk.sdk.deleteDirectConnectGatewayAssociation(req);

            if (res.deleteDirectConnectGatewayAssociationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDirectConnectGatewayAssociationProposal

Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDirectConnectGatewayAssociationProposalRequest;
import org.openapis.openapi.models.operations.DeleteDirectConnectGatewayAssociationProposalResponse;
import org.openapis.openapi.models.operations.DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteDirectConnectGatewayAssociationProposalRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDirectConnectGatewayAssociationProposalRequest req = new DeleteDirectConnectGatewayAssociationProposalRequest(                new DeleteDirectConnectGatewayAssociationProposalRequest("laborum");, DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnum.OVERTURE_SERVICE_DELETE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSAL) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "aspernatur";
                xAmzDate = "dolores";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "aliquid";
            }};            

            DeleteDirectConnectGatewayAssociationProposalResponse res = sdk.sdk.deleteDirectConnectGatewayAssociationProposal(req);

            if (res.deleteDirectConnectGatewayAssociationProposalResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInterconnect

<p>Deletes the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInterconnectRequest;
import org.openapis.openapi.models.operations.DeleteInterconnectResponse;
import org.openapis.openapi.models.operations.DeleteInterconnectXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteInterconnectRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteInterconnectRequest req = new DeleteInterconnectRequest(                new DeleteInterconnectRequest("molestias");, DeleteInterconnectXAmzTargetEnum.OVERTURE_SERVICE_DELETE_INTERCONNECT) {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "qui";
                xAmzCredential = "neque";
                xAmzDate = "fugit";
                xAmzSecurityToken = "magni";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "sunt";
            }};            

            DeleteInterconnectResponse res = sdk.sdk.deleteInterconnect(req);

            if (res.deleteInterconnectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLag

Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLagRequest;
import org.openapis.openapi.models.operations.DeleteLagResponse;
import org.openapis.openapi.models.operations.DeleteLagXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteLagRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteLagRequest req = new DeleteLagRequest(                new DeleteLagRequest("nam");, DeleteLagXAmzTargetEnum.OVERTURE_SERVICE_DELETE_LAG) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "cumque";
                xAmzDate = "soluta";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "et";
                xAmzSignedHeaders = "saepe";
            }};            

            DeleteLagResponse res = sdk.sdk.deleteLag(req);

            if (res.lag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteVirtualInterface

Deletes a virtual interface.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteVirtualInterfaceRequest;
import org.openapis.openapi.models.operations.DeleteVirtualInterfaceResponse;
import org.openapis.openapi.models.operations.DeleteVirtualInterfaceXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteVirtualInterfaceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteVirtualInterfaceRequest req = new DeleteVirtualInterfaceRequest(                new DeleteVirtualInterfaceRequest("veritatis");, DeleteVirtualInterfaceXAmzTargetEnum.OVERTURE_SERVICE_DELETE_VIRTUAL_INTERFACE) {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "quos";
                xAmzCredential = "tempore";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "dolorem";
            }};            

            DeleteVirtualInterfaceResponse res = sdk.sdk.deleteVirtualInterface(req);

            if (res.deleteVirtualInterfaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~describeConnectionLoa~~

<p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for a connection.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConnectionLoaRequest;
import org.openapis.openapi.models.operations.DescribeConnectionLoaResponse;
import org.openapis.openapi.models.operations.DescribeConnectionLoaXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeConnectionLoaRequest;
import org.openapis.openapi.models.shared.LoaContentTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConnectionLoaRequest req = new DescribeConnectionLoaRequest(                new DescribeConnectionLoaRequest("labore") {{
                                loaContentType = LoaContentTypeEnum.APPLICATION_PDF;
                                providerName = "adipisci";
                            }};, DescribeConnectionLoaXAmzTargetEnum.OVERTURE_SERVICE_DESCRIBE_CONNECTION_LOA) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "quae";
                xAmzDate = "aut";
                xAmzSecurityToken = "quas";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "consequatur";
            }};            

            DescribeConnectionLoaResponse res = sdk.sdk.describeConnectionLoa(req);

            if (res.describeConnectionLoaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConnections

Displays the specified connection or all connections in this Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConnectionsRequest;
import org.openapis.openapi.models.operations.DescribeConnectionsResponse;
import org.openapis.openapi.models.operations.DescribeConnectionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeConnectionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConnectionsRequest req = new DescribeConnectionsRequest(                new DescribeConnectionsRequest() {{
                                connectionId = "repellendus";
                            }};, DescribeConnectionsXAmzTargetEnum.OVERTURE_SERVICE_DESCRIBE_CONNECTIONS) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "ut";
                xAmzDate = "facilis";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "quae";
            }};            

            DescribeConnectionsResponse res = sdk.sdk.describeConnections(req);

            if (res.connections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~describeConnectionsOnInterconnect~~

<p>Deprecated. Use <a>DescribeHostedConnections</a> instead.</p> <p>Lists the connections that have been provisioned on the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConnectionsOnInterconnectRequest;
import org.openapis.openapi.models.operations.DescribeConnectionsOnInterconnectResponse;
import org.openapis.openapi.models.operations.DescribeConnectionsOnInterconnectXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeConnectionsOnInterconnectRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConnectionsOnInterconnectRequest req = new DescribeConnectionsOnInterconnectRequest(                new DescribeConnectionsOnInterconnectRequest("odio");, DescribeConnectionsOnInterconnectXAmzTargetEnum.OVERTURE_SERVICE_DESCRIBE_CONNECTIONS_ON_INTERCONNECT) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "quisquam";
                xAmzDate = "vero";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "ipsum";
            }};            

            DescribeConnectionsOnInterconnectResponse res = sdk.sdk.describeConnectionsOnInterconnect(req);

            if (res.connections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCustomerMetadata

Get and view a list of customer agreements, along with their signed status and whether the customer is an NNIPartner, NNIPartnerV2, or a nonPartner. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCustomerMetadataRequest;
import org.openapis.openapi.models.operations.DescribeCustomerMetadataResponse;
import org.openapis.openapi.models.operations.DescribeCustomerMetadataXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCustomerMetadataRequest req = new DescribeCustomerMetadataRequest(DescribeCustomerMetadataXAmzTargetEnum.OVERTURE_SERVICE_DESCRIBE_CUSTOMER_METADATA) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "vero";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "distinctio";
            }};            

            DescribeCustomerMetadataResponse res = sdk.sdk.describeCustomerMetadata(req);

            if (res.describeCustomerMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDirectConnectGatewayAssociationProposals

Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDirectConnectGatewayAssociationProposalsRequest;
import org.openapis.openapi.models.operations.DescribeDirectConnectGatewayAssociationProposalsResponse;
import org.openapis.openapi.models.operations.DescribeDirectConnectGatewayAssociationProposalsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDirectConnectGatewayAssociationProposalsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDirectConnectGatewayAssociationProposalsRequest req = new DescribeDirectConnectGatewayAssociationProposalsRequest(                new DescribeDirectConnectGatewayAssociationProposalsRequest() {{
                                associatedGatewayId = "odio";
                                directConnectGatewayId = "similique";
                                maxResults = 708548L;
                                nextToken = "vero";
                                proposalId = "ducimus";
                            }};, DescribeDirectConnectGatewayAssociationProposalsXAmzTargetEnum.OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAY_ASSOCIATION_PROPOSALS) {{
                xAmzAlgorithm = "dolore";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "illum";
                xAmzDate = "sequi";
                xAmzSecurityToken = "natus";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "aut";
            }};            

            DescribeDirectConnectGatewayAssociationProposalsResponse res = sdk.sdk.describeDirectConnectGatewayAssociationProposals(req);

            if (res.describeDirectConnectGatewayAssociationProposalsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDirectConnectGatewayAssociations

<p>Lists the associations between your Direct Connect gateways and virtual private gateways and transit gateways. You must specify one of the following:</p> <ul> <li> <p>A Direct Connect gateway</p> <p>The response contains all virtual private gateways and transit gateways associated with the Direct Connect gateway.</p> </li> <li> <p>A virtual private gateway</p> <p>The response contains the Direct Connect gateway.</p> </li> <li> <p>A transit gateway</p> <p>The response contains the Direct Connect gateway.</p> </li> <li> <p>A Direct Connect gateway and a virtual private gateway</p> <p>The response contains the association between the Direct Connect gateway and virtual private gateway.</p> </li> <li> <p>A Direct Connect gateway and a transit gateway</p> <p>The response contains the association between the Direct Connect gateway and transit gateway.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDirectConnectGatewayAssociationsRequest;
import org.openapis.openapi.models.operations.DescribeDirectConnectGatewayAssociationsResponse;
import org.openapis.openapi.models.operations.DescribeDirectConnectGatewayAssociationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDirectConnectGatewayAssociationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDirectConnectGatewayAssociationsRequest req = new DescribeDirectConnectGatewayAssociationsRequest(                new DescribeDirectConnectGatewayAssociationsRequest() {{
                                associatedGatewayId = "exercitationem";
                                associationId = "nulla";
                                directConnectGatewayId = "fugit";
                                maxResults = 780427L;
                                nextToken = "maiores";
                                virtualGatewayId = "doloribus";
                            }};, DescribeDirectConnectGatewayAssociationsXAmzTargetEnum.OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAY_ASSOCIATIONS) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "eligendi";
                xAmzCredential = "ducimus";
                xAmzDate = "alias";
                xAmzSecurityToken = "officia";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "ipsam";
            }};            

            DescribeDirectConnectGatewayAssociationsResponse res = sdk.sdk.describeDirectConnectGatewayAssociations(req);

            if (res.describeDirectConnectGatewayAssociationsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDirectConnectGatewayAttachments

Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response contains the attachment between the Direct Connect gateway and the virtual interface.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDirectConnectGatewayAttachmentsRequest;
import org.openapis.openapi.models.operations.DescribeDirectConnectGatewayAttachmentsResponse;
import org.openapis.openapi.models.operations.DescribeDirectConnectGatewayAttachmentsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDirectConnectGatewayAttachmentsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDirectConnectGatewayAttachmentsRequest req = new DescribeDirectConnectGatewayAttachmentsRequest(                new DescribeDirectConnectGatewayAttachmentsRequest() {{
                                directConnectGatewayId = "aspernatur";
                                maxResults = 428224L;
                                nextToken = "possimus";
                                virtualInterfaceId = "magnam";
                            }};, DescribeDirectConnectGatewayAttachmentsXAmzTargetEnum.OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAY_ATTACHMENTS) {{
                xAmzAlgorithm = "ratione";
                xAmzContentSha256 = "ex";
                xAmzCredential = "laudantium";
                xAmzDate = "dicta";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "quasi";
            }};            

            DescribeDirectConnectGatewayAttachmentsResponse res = sdk.sdk.describeDirectConnectGatewayAttachments(req);

            if (res.describeDirectConnectGatewayAttachmentsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeDirectConnectGateways

Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeDirectConnectGatewaysRequest;
import org.openapis.openapi.models.operations.DescribeDirectConnectGatewaysResponse;
import org.openapis.openapi.models.operations.DescribeDirectConnectGatewaysXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeDirectConnectGatewaysRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeDirectConnectGatewaysRequest req = new DescribeDirectConnectGatewaysRequest(                new DescribeDirectConnectGatewaysRequest() {{
                                directConnectGatewayId = "nulla";
                                maxResults = 569211L;
                                nextToken = "voluptatibus";
                            }};, DescribeDirectConnectGatewaysXAmzTargetEnum.OVERTURE_SERVICE_DESCRIBE_DIRECT_CONNECT_GATEWAYS) {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "quisquam";
                xAmzDate = "saepe";
                xAmzSecurityToken = "ea";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "corporis";
            }};            

            DescribeDirectConnectGatewaysResponse res = sdk.sdk.describeDirectConnectGateways(req);

            if (res.describeDirectConnectGatewaysResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeHostedConnections

<p>Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG).</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeHostedConnectionsRequest;
import org.openapis.openapi.models.operations.DescribeHostedConnectionsResponse;
import org.openapis.openapi.models.operations.DescribeHostedConnectionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeHostedConnectionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeHostedConnectionsRequest req = new DescribeHostedConnectionsRequest(                new DescribeHostedConnectionsRequest("aliquid");, DescribeHostedConnectionsXAmzTargetEnum.OVERTURE_SERVICE_DESCRIBE_HOSTED_CONNECTIONS) {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "ea";
                xAmzDate = "quo";
                xAmzSecurityToken = "consectetur";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "aspernatur";
            }};            

            DescribeHostedConnectionsResponse res = sdk.sdk.describeHostedConnections(req);

            if (res.connections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~describeInterconnectLoa~~

<p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for the specified interconnect.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeInterconnectLoaRequest;
import org.openapis.openapi.models.operations.DescribeInterconnectLoaResponse;
import org.openapis.openapi.models.operations.DescribeInterconnectLoaXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeInterconnectLoaRequest;
import org.openapis.openapi.models.shared.LoaContentTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeInterconnectLoaRequest req = new DescribeInterconnectLoaRequest(                new DescribeInterconnectLoaRequest("eaque") {{
                                loaContentType = LoaContentTypeEnum.APPLICATION_PDF;
                                providerName = "a";
                            }};, DescribeInterconnectLoaXAmzTargetEnum.OVERTURE_SERVICE_DESCRIBE_INTERCONNECT_LOA) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "aut";
                xAmzCredential = "aut";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "fugit";
            }};            

            DescribeInterconnectLoaResponse res = sdk.sdk.describeInterconnectLoa(req);

            if (res.describeInterconnectLoaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeInterconnects

Lists the interconnects owned by the Amazon Web Services account or only the specified interconnect.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeInterconnectsRequest;
import org.openapis.openapi.models.operations.DescribeInterconnectsResponse;
import org.openapis.openapi.models.operations.DescribeInterconnectsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeInterconnectsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeInterconnectsRequest req = new DescribeInterconnectsRequest(                new DescribeInterconnectsRequest() {{
                                interconnectId = "inventore";
                            }};, DescribeInterconnectsXAmzTargetEnum.OVERTURE_SERVICE_DESCRIBE_INTERCONNECTS) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "et";
                xAmzCredential = "dolorum";
                xAmzDate = "laborum";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "eum";
            }};            

            DescribeInterconnectsResponse res = sdk.sdk.describeInterconnects(req);

            if (res.interconnects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLags

Describes all your link aggregation groups (LAG) or the specified LAG.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLagsRequest;
import org.openapis.openapi.models.operations.DescribeLagsResponse;
import org.openapis.openapi.models.operations.DescribeLagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLagsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLagsRequest req = new DescribeLagsRequest(                new DescribeLagsRequest() {{
                                lagId = "nobis";
                            }};, DescribeLagsXAmzTargetEnum.OVERTURE_SERVICE_DESCRIBE_LAGS) {{
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "nulla";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "libero";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "tempora";
            }};            

            DescribeLagsResponse res = sdk.sdk.describeLags(req);

            if (res.lags != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLoa

<p>Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLoaRequest;
import org.openapis.openapi.models.operations.DescribeLoaResponse;
import org.openapis.openapi.models.operations.DescribeLoaXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLoaRequest;
import org.openapis.openapi.models.shared.LoaContentTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLoaRequest req = new DescribeLoaRequest(                new DescribeLoaRequest("explicabo") {{
                                loaContentType = LoaContentTypeEnum.APPLICATION_PDF;
                                providerName = "provident";
                            }};, DescribeLoaXAmzTargetEnum.OVERTURE_SERVICE_DESCRIBE_LOA) {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "magnam";
                xAmzDate = "odio";
                xAmzSecurityToken = "eius";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "esse";
            }};            

            DescribeLoaResponse res = sdk.sdk.describeLoa(req);

            if (res.loa != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLocations

Lists the Direct Connect locations in the current Amazon Web Services Region. These are the locations that can be selected when calling <a>CreateConnection</a> or <a>CreateInterconnect</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLocationsRequest;
import org.openapis.openapi.models.operations.DescribeLocationsResponse;
import org.openapis.openapi.models.operations.DescribeLocationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLocationsRequest req = new DescribeLocationsRequest(DescribeLocationsXAmzTargetEnum.OVERTURE_SERVICE_DESCRIBE_LOCATIONS) {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "quidem";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "ut";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "suscipit";
            }};            

            DescribeLocationsResponse res = sdk.sdk.describeLocations(req);

            if (res.locations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRouterConfiguration

 Details about the router. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRouterConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeRouterConfigurationResponse;
import org.openapis.openapi.models.operations.DescribeRouterConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRouterConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRouterConfigurationRequest req = new DescribeRouterConfigurationRequest(                new DescribeRouterConfigurationRequest("eos") {{
                                routerTypeIdentifier = "praesentium";
                            }};, DescribeRouterConfigurationXAmzTargetEnum.OVERTURE_SERVICE_DESCRIBE_ROUTER_CONFIGURATION) {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "ipsa";
                xAmzDate = "id";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "neque";
                xAmzSignedHeaders = "quo";
            }};            

            DescribeRouterConfigurationResponse res = sdk.sdk.describeRouterConfiguration(req);

            if (res.describeRouterConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTags

Describes the tags associated with the specified Direct Connect resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTagsRequest;
import org.openapis.openapi.models.operations.DescribeTagsResponse;
import org.openapis.openapi.models.operations.DescribeTagsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTagsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTagsRequest req = new DescribeTagsRequest(                new DescribeTagsRequest(                new String[]{{
                                                add("fuga"),
                                                add("eius"),
                                                add("eos"),
                                                add("voluptas"),
                                            }});, DescribeTagsXAmzTargetEnum.OVERTURE_SERVICE_DESCRIBE_TAGS) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "consequatur";
                xAmzDate = "tempora";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "aspernatur";
            }};            

            DescribeTagsResponse res = sdk.sdk.describeTags(req);

            if (res.describeTagsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeVirtualGateways

<p>Lists the virtual private gateways owned by the Amazon Web Services account.</p> <p>You can create one or more Direct Connect private virtual interfaces linked to a virtual private gateway.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeVirtualGatewaysRequest;
import org.openapis.openapi.models.operations.DescribeVirtualGatewaysResponse;
import org.openapis.openapi.models.operations.DescribeVirtualGatewaysXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sequi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeVirtualGatewaysRequest req = new DescribeVirtualGatewaysRequest(DescribeVirtualGatewaysXAmzTargetEnum.OVERTURE_SERVICE_DESCRIBE_VIRTUAL_GATEWAYS) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "esse";
                xAmzCredential = "recusandae";
                xAmzDate = "aperiam";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "dignissimos";
            }};            

            DescribeVirtualGatewaysResponse res = sdk.sdk.describeVirtualGateways(req);

            if (res.virtualGateways != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeVirtualInterfaces

<p>Displays all virtual interfaces for an Amazon Web Services account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned.</p> <p>A virtual interface (VLAN) transmits the traffic between the Direct Connect location and the customer network.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeVirtualInterfacesRequest;
import org.openapis.openapi.models.operations.DescribeVirtualInterfacesResponse;
import org.openapis.openapi.models.operations.DescribeVirtualInterfacesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeVirtualInterfacesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeVirtualInterfacesRequest req = new DescribeVirtualInterfacesRequest(                new DescribeVirtualInterfacesRequest() {{
                                connectionId = "nihil";
                                virtualInterfaceId = "totam";
                            }};, DescribeVirtualInterfacesXAmzTargetEnum.OVERTURE_SERVICE_DESCRIBE_VIRTUAL_INTERFACES) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "aliquam";
                xAmzCredential = "odio";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "dolores";
            }};            

            DescribeVirtualInterfacesResponse res = sdk.sdk.describeVirtualInterfaces(req);

            if (res.virtualInterfaces != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateConnectionFromLag

<p>Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the <a>DeleteConnection</a> request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an Direct Connect Partner is automatically converted to an interconnect.</p> <p>If disassociating the connection would cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateConnectionFromLagRequest;
import org.openapis.openapi.models.operations.DisassociateConnectionFromLagResponse;
import org.openapis.openapi.models.operations.DisassociateConnectionFromLagXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateConnectionFromLagRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateConnectionFromLagRequest req = new DisassociateConnectionFromLagRequest(                new DisassociateConnectionFromLagRequest("molestiae", "accusantium");, DisassociateConnectionFromLagXAmzTargetEnum.OVERTURE_SERVICE_DISASSOCIATE_CONNECTION_FROM_LAG) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "eum";
                xAmzCredential = "quas";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "fugit";
            }};            

            DisassociateConnectionFromLagResponse res = sdk.sdk.disassociateConnectionFromLag(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateMacSecKey

Removes the association between a MAC Security (MACsec) security key and an Direct Connect dedicated connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateMacSecKeyRequest;
import org.openapis.openapi.models.operations.DisassociateMacSecKeyResponse;
import org.openapis.openapi.models.operations.DisassociateMacSecKeyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateMacSecKeyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateMacSecKeyRequest req = new DisassociateMacSecKeyRequest(                new DisassociateMacSecKeyRequest("mollitia", "incidunt");, DisassociateMacSecKeyXAmzTargetEnum.OVERTURE_SERVICE_DISASSOCIATE_MAC_SEC_KEY) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "minima";
                xAmzDate = "nisi";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "consequuntur";
            }};            

            DisassociateMacSecKeyResponse res = sdk.sdk.disassociateMacSecKey(req);

            if (res.disassociateMacSecKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVirtualInterfaceTestHistory

Lists the virtual interface failover test history.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVirtualInterfaceTestHistoryRequest;
import org.openapis.openapi.models.operations.ListVirtualInterfaceTestHistoryResponse;
import org.openapis.openapi.models.operations.ListVirtualInterfaceTestHistoryXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListVirtualInterfaceTestHistoryRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListVirtualInterfaceTestHistoryRequest req = new ListVirtualInterfaceTestHistoryRequest(                new ListVirtualInterfaceTestHistoryRequest() {{
                                bgpPeers = new String[]{{
                                    add("saepe"),
                                }};
                                maxResults = 578922L;
                                nextToken = "atque";
                                status = "et";
                                testId = "esse";
                                virtualInterfaceId = "eveniet";
                            }};, ListVirtualInterfaceTestHistoryXAmzTargetEnum.OVERTURE_SERVICE_LIST_VIRTUAL_INTERFACE_TEST_HISTORY) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "esse";
                xAmzDate = "quod";
                xAmzSecurityToken = "nam";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "aliquid";
            }};            

            ListVirtualInterfaceTestHistoryResponse res = sdk.sdk.listVirtualInterfaceTestHistory(req);

            if (res.listVirtualInterfaceTestHistoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startBgpFailoverTest

<p>Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages.</p> <p>You can run the test on public, private, transit, and hosted virtual interfaces.</p> <p>You can use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html">ListVirtualInterfaceTestHistory</a> to view the virtual interface test history.</p> <p>If you need to stop the test before the test interval completes, use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html">StopBgpFailoverTest</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartBgpFailoverTestRequest;
import org.openapis.openapi.models.operations.StartBgpFailoverTestResponse;
import org.openapis.openapi.models.operations.StartBgpFailoverTestXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartBgpFailoverTestRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartBgpFailoverTestRequest req = new StartBgpFailoverTestRequest(                new StartBgpFailoverTestRequest("saepe") {{
                                bgpPeers = new String[]{{
                                    add("harum"),
                                    add("molestiae"),
                                }};
                                testDurationInMinutes = 699622L;
                            }};, StartBgpFailoverTestXAmzTargetEnum.OVERTURE_SERVICE_START_BGP_FAILOVER_TEST) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "minima";
                xAmzCredential = "distinctio";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "sit";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "tempore";
            }};            

            StartBgpFailoverTestResponse res = sdk.sdk.startBgpFailoverTest(req);

            if (res.startBgpFailoverTestResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopBgpFailoverTest

Stops the virtual interface failover test.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopBgpFailoverTestRequest;
import org.openapis.openapi.models.operations.StopBgpFailoverTestResponse;
import org.openapis.openapi.models.operations.StopBgpFailoverTestXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopBgpFailoverTestRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopBgpFailoverTestRequest req = new StopBgpFailoverTestRequest(                new StopBgpFailoverTestRequest("cumque");, StopBgpFailoverTestXAmzTargetEnum.OVERTURE_SERVICE_STOP_BGP_FAILOVER_TEST) {{
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "minus";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "esse";
            }};            

            StopBgpFailoverTestResponse res = sdk.sdk.stopBgpFailoverTest(req);

            if (res.stopBgpFailoverTestResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Adds the specified tags to the specified Direct Connect resource. Each resource can have a maximum of 50 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("provident",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("esse") {{
                                                    key = "nulla";
                                                    value = "quas";
                                                }}),
                                                add(new Tag("error") {{
                                                    key = "quasi";
                                                    value = "a";
                                                }}),
                                                add(new Tag("possimus") {{
                                                    key = "sint";
                                                    value = "pariatur";
                                                }}),
                                                add(new Tag("asperiores") {{
                                                    key = "quia";
                                                    value = "eveniet";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.OVERTURE_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "facere";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "consequuntur";
                xAmzDate = "quasi";
                xAmzSecurityToken = "similique";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "aliquid";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes one or more tags from the specified Direct Connect resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("quae",                 new String[]{{
                                                add("vel"),
                                                add("in"),
                                                add("eius"),
                                                add("libero"),
                                            }});, UntagResourceXAmzTargetEnum.OVERTURE_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "accusantium";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "ullam";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConnection

<p>Updates the Direct Connect dedicated connection configuration.</p> <p>You can update the following parameters for a connection:</p> <ul> <li> <p>The connection name</p> </li> <li> <p>The connection's MAC Security (MACsec) encryption mode.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConnectionRequest;
import org.openapis.openapi.models.operations.UpdateConnectionResponse;
import org.openapis.openapi.models.operations.UpdateConnectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateConnectionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConnectionRequest req = new UpdateConnectionRequest(                new UpdateConnectionRequest("ullam") {{
                                connectionName = "nisi";
                                encryptionMode = "aut";
                            }};, UpdateConnectionXAmzTargetEnum.OVERTURE_SERVICE_UPDATE_CONNECTION) {{
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "qui";
                xAmzCredential = "quibusdam";
                xAmzDate = "ex";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "itaque";
                xAmzSignedHeaders = "dolorum";
            }};            

            UpdateConnectionResponse res = sdk.sdk.updateConnection(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDirectConnectGateway

Updates the name of a current Direct Connect gateway.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDirectConnectGatewayRequest;
import org.openapis.openapi.models.operations.UpdateDirectConnectGatewayResponse;
import org.openapis.openapi.models.operations.UpdateDirectConnectGatewayXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDirectConnectGatewayRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDirectConnectGatewayRequest req = new UpdateDirectConnectGatewayRequest(                new UpdateDirectConnectGatewayRequest("omnis", "tenetur");, UpdateDirectConnectGatewayXAmzTargetEnum.OVERTURE_SERVICE_UPDATE_DIRECT_CONNECT_GATEWAY) {{
                xAmzAlgorithm = "quasi";
                xAmzContentSha256 = "at";
                xAmzCredential = "et";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "veritatis";
            }};            

            UpdateDirectConnectGatewayResponse res = sdk.sdk.updateDirectConnectGateway(req);

            if (res.updateDirectConnectGatewayResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDirectConnectGatewayAssociation

<p>Updates the specified attributes of the Direct Connect gateway association.</p> <p>Add or remove prefixes from the association.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDirectConnectGatewayAssociationRequest;
import org.openapis.openapi.models.operations.UpdateDirectConnectGatewayAssociationResponse;
import org.openapis.openapi.models.operations.UpdateDirectConnectGatewayAssociationXAmzTargetEnum;
import org.openapis.openapi.models.shared.RouteFilterPrefix;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateDirectConnectGatewayAssociationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDirectConnectGatewayAssociationRequest req = new UpdateDirectConnectGatewayAssociationRequest(                new UpdateDirectConnectGatewayAssociationRequest() {{
                                addAllowedPrefixesToDirectConnectGateway = new org.openapis.openapi.models.shared.RouteFilterPrefix[]{{
                                    add(new RouteFilterPrefix() {{
                                        cidr = "iste";
                                    }}),
                                }};
                                associationId = "temporibus";
                                removeAllowedPrefixesToDirectConnectGateway = new org.openapis.openapi.models.shared.RouteFilterPrefix[]{{
                                    add(new RouteFilterPrefix() {{
                                        cidr = "rem";
                                    }}),
                                }};
                            }};, UpdateDirectConnectGatewayAssociationXAmzTargetEnum.OVERTURE_SERVICE_UPDATE_DIRECT_CONNECT_GATEWAY_ASSOCIATION) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "laudantium";
                xAmzCredential = "eum";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "ab";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "non";
            }};            

            UpdateDirectConnectGatewayAssociationResponse res = sdk.sdk.updateDirectConnectGatewayAssociation(req);

            if (res.updateDirectConnectGatewayAssociationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLag

<p>Updates the attributes of the specified link aggregation group (LAG).</p> <p>You can update the following LAG attributes:</p> <ul> <li> <p>The name of the LAG.</p> </li> <li> <p>The value for the minimum number of connections that must be operational for the LAG itself to be operational. </p> </li> <li> <p>The LAG's MACsec encryption mode.</p> <p>Amazon Web Services assigns this value to each connection which is part of the LAG.</p> </li> <li> <p>The tags</p> </li> </ul> <note> <p>If you adjust the threshold value for the minimum number of operational connections, ensure that the new value does not cause the LAG to fall below the threshold and become non-operational.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLagRequest;
import org.openapis.openapi.models.operations.UpdateLagResponse;
import org.openapis.openapi.models.operations.UpdateLagXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateLagRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLagRequest req = new UpdateLagRequest(                new UpdateLagRequest("dolor") {{
                                encryptionMode = "occaecati";
                                lagName = "numquam";
                                minimumLinks = 771089L;
                            }};, UpdateLagXAmzTargetEnum.OVERTURE_SERVICE_UPDATE_LAG) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "aut";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "natus";
            }};            

            UpdateLagResponse res = sdk.sdk.updateLag(req);

            if (res.lag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVirtualInterfaceAttributes

<p>Updates the specified attributes of the specified virtual private interface.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual q interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVirtualInterfaceAttributesRequest;
import org.openapis.openapi.models.operations.UpdateVirtualInterfaceAttributesResponse;
import org.openapis.openapi.models.operations.UpdateVirtualInterfaceAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateVirtualInterfaceAttributesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateVirtualInterfaceAttributesRequest req = new UpdateVirtualInterfaceAttributesRequest(                new UpdateVirtualInterfaceAttributesRequest("voluptatibus") {{
                                enableSiteLink = false;
                                mtu = 374323L;
                                virtualInterfaceName = "asperiores";
                            }};, UpdateVirtualInterfaceAttributesXAmzTargetEnum.OVERTURE_SERVICE_UPDATE_VIRTUAL_INTERFACE_ATTRIBUTES) {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "ea";
                xAmzCredential = "quaerat";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "maxime";
            }};            

            UpdateVirtualInterfaceAttributesResponse res = sdk.sdk.updateVirtualInterfaceAttributes(req);

            if (res.virtualInterface != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
