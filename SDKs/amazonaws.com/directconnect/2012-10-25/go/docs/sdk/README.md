# SDK

## Overview

Direct Connect links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an Direct Connect router. With this connection in place, you can create virtual interfaces directly to the Amazon Web Services Cloud (for example, to Amazon EC2 and Amazon S3) and to Amazon VPC, bypassing Internet service providers in your network path. A connection provides access to all Amazon Web Services Regions except the China (Beijing) and (China) Ningxia Regions. Amazon Web Services resources in the China Regions can only be accessed through locations associated with those Regions.

Amazon Web Services documentation
<https://docs.aws.amazon.com/directconnect/>
### Available Operations

* [AcceptDirectConnectGatewayAssociationProposal](#acceptdirectconnectgatewayassociationproposal) - Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.
* [~~AllocateConnectionOnInterconnect~~](#allocateconnectiononinterconnect) - <p>Deprecated. Use <a>AllocateHostedConnection</a> instead.</p> <p>Creates a hosted connection on an interconnect.</p> <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note> :warning: **Deprecated**
* [AllocateHostedConnection](#allocatehostedconnection) - <p>Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.</p> <p>Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. Amazon Web Services polices the hosted connection for the specified capacity and the Direct Connect Partner must also police the hosted connection for the specified capacity.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>
* [AllocatePrivateVirtualInterface](#allocateprivatevirtualinterface) - <p>Provisions a private virtual interface to be owned by the specified Amazon Web Services account.</p> <p>Virtual interfaces created using this action must be confirmed by the owner using <a>ConfirmPrivateVirtualInterface</a>. Until then, the virtual interface is in the <code>Confirming</code> state and is not available to handle traffic.</p>
* [AllocatePublicVirtualInterface](#allocatepublicvirtualinterface) - <p>Provisions a public virtual interface to be owned by the specified Amazon Web Services account.</p> <p>The owner of a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web Services account.</p> <p>Virtual interfaces created using this function must be confirmed by the owner using <a>ConfirmPublicVirtualInterface</a>. Until this step has been completed, the virtual interface is in the <code>confirming</code> state and is not available to handle traffic.</p> <p>When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>
* [AllocateTransitVirtualInterface](#allocatetransitvirtualinterface) - <p>Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this type of interface to connect a transit gateway to your Direct Connect gateway.</p> <p>The owner of a connection provisions a transit virtual interface to be owned by the specified Amazon Web Services account.</p> <p>After you create a transit virtual interface, it must be confirmed by the owner using <a>ConfirmTransitVirtualInterface</a>. Until this step has been completed, the transit virtual interface is in the <code>requested</code> state and is not available to handle traffic.</p>
* [AssociateConnectionWithLag](#associateconnectionwithlag) - <p>Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to Amazon Web Services is interrupted). The connection must be hosted on the same Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing the connection would cause the original LAG to fall below its setting for minimum number of operational connections, the request fails.</p> <p>Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG.</p> <p>For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.</p>
* [AssociateHostedConnection](#associatehostedconnection) - <p>Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to Amazon Web Services as it is being migrated.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>
* [AssociateMacSecKey](#associatemacseckey) - <p>Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with an Direct Connect dedicated connection.</p> <p>You must supply either the <code>secretARN,</code> or the CKN/CAK (<code>ckn</code> and <code>cak</code>) pair in the request.</p> <p>For information about MAC Security (MACsec) key considerations, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-key-consideration">MACsec pre-shared CKN/CAK key considerations </a> in the <i>Direct Connect User Guide</i>.</p>
* [AssociateVirtualInterface](#associatevirtualinterface) - <p>Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to Amazon Web Services is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails.</p> <p>Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using <a>AssociateHostedConnection</a>.</p> <p>To reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface itself or the connection to which the virtual interface is currently associated. Additionally, the requester must own the connection or LAG for the association.</p>
* [ConfirmConnection](#confirmconnection) - <p>Confirms the creation of the specified hosted connection on an interconnect.</p> <p>Upon creation, the hosted connection is initially in the <code>Ordering</code> state, and remains in this state until the owner confirms creation of the hosted connection.</p>
* [ConfirmCustomerAgreement](#confirmcustomeragreement) -  The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG). 
* [ConfirmPrivateVirtualInterface](#confirmprivatevirtualinterface) - <p>Accepts ownership of a private virtual interface created by another Amazon Web Services account.</p> <p>After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.</p>
* [ConfirmPublicVirtualInterface](#confirmpublicvirtualinterface) - <p>Accepts ownership of a public virtual interface created by another Amazon Web Services account.</p> <p>After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.</p>
* [ConfirmTransitVirtualInterface](#confirmtransitvirtualinterface) - <p>Accepts ownership of a transit virtual interface created by another Amazon Web Services account.</p> <p> After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.</p>
* [CreateBGPPeer](#createbgppeer) - <p>Creates a BGP peer on the specified virtual interface.</p> <p>You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access Amazon Web Services resources that also use that address family.</p> <p>If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot be in the same address family as an existing BGP peer on the virtual interface.</p> <p>When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p> <important> <p>If you let Amazon Web Services auto-assign IPv4 addresses, a /30 CIDR will be allocated from 169.254.0.0/16. Amazon Web Services does not recommend this option if you intend to use the customer router peer IP address as the source and destination for traffic. Instead you should use RFC 1918 or other addressing, and specify the address yourself. For more information about RFC 1918 see <a href="https://datatracker.ietf.org/doc/html/rfc1918"> Address Allocation for Private Internets</a>.</p> </important> <p>For a public virtual interface, the Autonomous System Number (ASN) must be private or already on the allow list for the virtual interface.</p>
* [CreateConnection](#createconnection) - <p>Creates a connection between a customer network and a specific Direct Connect location.</p> <p>A connection links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an Direct Connect router.</p> <p>To find the locations for your Region, use <a>DescribeLocations</a>.</p> <p>You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection is created.</p>
* [CreateDirectConnectGateway](#createdirectconnectgateway) - Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any Amazon Web Services Region after it is created. The virtual interfaces and virtual private gateways that are connected through a Direct Connect gateway can be in different Amazon Web Services Regions. This enables you to connect to a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic between them.
* [CreateDirectConnectGatewayAssociation](#createdirectconnectgatewayassociation) - Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.
* [CreateDirectConnectGatewayAssociationProposal](#createdirectconnectgatewayassociationproposal) - <p>Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway.</p> <p>You can associate a Direct Connect gateway and virtual private gateway or transit gateway that is owned by any Amazon Web Services account. </p>
* [CreateInterconnect](#createinterconnect) - <p>Creates an interconnect between an Direct Connect Partner's network and a specific Direct Connect location.</p> <p>An interconnect is a connection that is capable of hosting other connections. The Direct Connect Partner can use an interconnect to provide Direct Connect hosted connections to customers through their own network services. Like a standard connection, an interconnect links the partner's network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an Direct Connect router.</p> <p>You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect is created.</p> <p>For each end customer, the Direct Connect Partner provisions a connection on their interconnect by calling <a>AllocateHostedConnection</a>. The end customer can then connect to Amazon Web Services resources by creating a virtual interface on their connection, using the VLAN assigned to them by the Direct Connect Partner.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>
* [CreateLag](#createlag) - <p>Creates a link aggregation group (LAG) with the specified number of bundled physical dedicated connections between the customer network and a specific Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a single interface.</p> <p>All connections in a LAG must use the same bandwidth (either 1Gbps or 10Gbps) and must terminate at the same Direct Connect endpoint.</p> <p>You can have up to 10 dedicated connections per LAG. Regardless of this limit, if you request more connections for the LAG than Direct Connect can allocate on a single endpoint, no LAG is created.</p> <p>You can specify an existing physical dedicated connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG will be created on the same Direct Connect endpoint to which the dedicated connection terminates. Any virtual interfaces associated with the dedicated connection are automatically disassociated and re-associated with the LAG. The connection ID does not change.</p> <p>If the Amazon Web Services account used to create a LAG is a registered Direct Connect Partner, the LAG is automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual interfaces cannot be directly configured.</p>
* [CreatePrivateVirtualInterface](#createprivatevirtualinterface) - <p>Creates a private virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple VPCs, including VPCs in different Amazon Web Services Regions. Connecting the private virtual interface to a VGW only provides access to a single VPC within the same Region.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
* [CreatePublicVirtualInterface](#createpublicvirtualinterface) - <p>Creates a public virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A public virtual interface supports sending traffic to public services of Amazon Web Services such as Amazon S3.</p> <p>When creating an IPv6 public virtual interface (<code>addressFamily</code> is <code>ipv6</code>), leave the <code>customer</code> and <code>amazon</code> address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.</p>
* [CreateTransitVirtualInterface](#createtransitvirtualinterface) - <p>Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway.</p> <important> <p>If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails.</p> </important> <p>A jumbo MTU value must be either 1500 or 8500. No other values will be accepted. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>
* [DeleteBGPPeer](#deletebgppeer) - <p>Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.</p> <p>You cannot delete the last BGP peer from a virtual interface.</p>
* [DeleteConnection](#deleteconnection) - <p>Deletes the specified connection.</p> <p>Deleting a connection only stops the Direct Connect port hour and data transfer charges. If you are partnering with any third parties to connect with the Direct Connect location, you must cancel your service with them separately.</p>
* [DeleteDirectConnectGateway](#deletedirectconnectgateway) - Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached to the Direct Connect gateway and disassociate all virtual private gateways associated with the Direct Connect gateway.
* [DeleteDirectConnectGatewayAssociation](#deletedirectconnectgatewayassociation) - <p>Deletes the association between the specified Direct Connect gateway and virtual private gateway.</p> <p>We recommend that you specify the <code>associationID</code> to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the <code>virtualGatewayId</code> and <code>directConnectGatewayId</code> to delete an association.</p>
* [DeleteDirectConnectGatewayAssociationProposal](#deletedirectconnectgatewayassociationproposal) - Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.
* [DeleteInterconnect](#deleteinterconnect) - <p>Deletes the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>
* [DeleteLag](#deletelag) - Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.
* [DeleteVirtualInterface](#deletevirtualinterface) - Deletes a virtual interface.
* [~~DescribeConnectionLoa~~](#describeconnectionloa) - <p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for a connection.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p> :warning: **Deprecated**
* [DescribeConnections](#describeconnections) - Displays the specified connection or all connections in this Region.
* [~~DescribeConnectionsOnInterconnect~~](#describeconnectionsoninterconnect) - <p>Deprecated. Use <a>DescribeHostedConnections</a> instead.</p> <p>Lists the connections that have been provisioned on the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note> :warning: **Deprecated**
* [DescribeCustomerMetadata](#describecustomermetadata) - Get and view a list of customer agreements, along with their signed status and whether the customer is an NNIPartner, NNIPartnerV2, or a nonPartner. 
* [DescribeDirectConnectGatewayAssociationProposals](#describedirectconnectgatewayassociationproposals) - Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway. 
* [DescribeDirectConnectGatewayAssociations](#describedirectconnectgatewayassociations) - <p>Lists the associations between your Direct Connect gateways and virtual private gateways and transit gateways. You must specify one of the following:</p> <ul> <li> <p>A Direct Connect gateway</p> <p>The response contains all virtual private gateways and transit gateways associated with the Direct Connect gateway.</p> </li> <li> <p>A virtual private gateway</p> <p>The response contains the Direct Connect gateway.</p> </li> <li> <p>A transit gateway</p> <p>The response contains the Direct Connect gateway.</p> </li> <li> <p>A Direct Connect gateway and a virtual private gateway</p> <p>The response contains the association between the Direct Connect gateway and virtual private gateway.</p> </li> <li> <p>A Direct Connect gateway and a transit gateway</p> <p>The response contains the association between the Direct Connect gateway and transit gateway.</p> </li> </ul>
* [DescribeDirectConnectGatewayAttachments](#describedirectconnectgatewayattachments) - Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response contains the attachment between the Direct Connect gateway and the virtual interface.
* [DescribeDirectConnectGateways](#describedirectconnectgateways) - Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.
* [DescribeHostedConnections](#describehostedconnections) - <p>Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG).</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>
* [~~DescribeInterconnectLoa~~](#describeinterconnectloa) - <p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for the specified interconnect.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p> :warning: **Deprecated**
* [DescribeInterconnects](#describeinterconnects) - Lists the interconnects owned by the Amazon Web Services account or only the specified interconnect.
* [DescribeLags](#describelags) - Describes all your link aggregation groups (LAG) or the specified LAG.
* [DescribeLoa](#describeloa) - <p>Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>
* [DescribeLocations](#describelocations) - Lists the Direct Connect locations in the current Amazon Web Services Region. These are the locations that can be selected when calling <a>CreateConnection</a> or <a>CreateInterconnect</a>.
* [DescribeRouterConfiguration](#describerouterconfiguration) -  Details about the router. 
* [DescribeTags](#describetags) - Describes the tags associated with the specified Direct Connect resources.
* [DescribeVirtualGateways](#describevirtualgateways) - <p>Lists the virtual private gateways owned by the Amazon Web Services account.</p> <p>You can create one or more Direct Connect private virtual interfaces linked to a virtual private gateway.</p>
* [DescribeVirtualInterfaces](#describevirtualinterfaces) - <p>Displays all virtual interfaces for an Amazon Web Services account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned.</p> <p>A virtual interface (VLAN) transmits the traffic between the Direct Connect location and the customer network.</p>
* [DisassociateConnectionFromLag](#disassociateconnectionfromlag) - <p>Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the <a>DeleteConnection</a> request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an Direct Connect Partner is automatically converted to an interconnect.</p> <p>If disassociating the connection would cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections. </p>
* [DisassociateMacSecKey](#disassociatemacseckey) - Removes the association between a MAC Security (MACsec) security key and an Direct Connect dedicated connection.
* [ListVirtualInterfaceTestHistory](#listvirtualinterfacetesthistory) - Lists the virtual interface failover test history.
* [StartBgpFailoverTest](#startbgpfailovertest) - <p>Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages.</p> <p>You can run the test on public, private, transit, and hosted virtual interfaces.</p> <p>You can use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html">ListVirtualInterfaceTestHistory</a> to view the virtual interface test history.</p> <p>If you need to stop the test before the test interval completes, use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html">StopBgpFailoverTest</a>.</p>
* [StopBgpFailoverTest](#stopbgpfailovertest) - Stops the virtual interface failover test.
* [TagResource](#tagresource) - <p>Adds the specified tags to the specified Direct Connect resource. Each resource can have a maximum of 50 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p>
* [UntagResource](#untagresource) - Removes one or more tags from the specified Direct Connect resource.
* [UpdateConnection](#updateconnection) - <p>Updates the Direct Connect dedicated connection configuration.</p> <p>You can update the following parameters for a connection:</p> <ul> <li> <p>The connection name</p> </li> <li> <p>The connection's MAC Security (MACsec) encryption mode.</p> </li> </ul>
* [UpdateDirectConnectGateway](#updatedirectconnectgateway) - Updates the name of a current Direct Connect gateway.
* [UpdateDirectConnectGatewayAssociation](#updatedirectconnectgatewayassociation) - <p>Updates the specified attributes of the Direct Connect gateway association.</p> <p>Add or remove prefixes from the association.</p>
* [UpdateLag](#updatelag) - <p>Updates the attributes of the specified link aggregation group (LAG).</p> <p>You can update the following LAG attributes:</p> <ul> <li> <p>The name of the LAG.</p> </li> <li> <p>The value for the minimum number of connections that must be operational for the LAG itself to be operational. </p> </li> <li> <p>The LAG's MACsec encryption mode.</p> <p>Amazon Web Services assigns this value to each connection which is part of the LAG.</p> </li> <li> <p>The tags</p> </li> </ul> <note> <p>If you adjust the threshold value for the minimum number of operational connections, ensure that the new value does not cause the LAG to fall below the threshold and become non-operational.</p> </note>
* [UpdateVirtualInterfaceAttributes](#updatevirtualinterfaceattributes) - <p>Updates the specified attributes of the specified virtual private interface.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual q interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>

## AcceptDirectConnectGatewayAssociationProposal

Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct Connect gateway.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AcceptDirectConnectGatewayAssociationProposal(ctx, operations.AcceptDirectConnectGatewayAssociationProposalRequest{
        AcceptDirectConnectGatewayAssociationProposalRequest: shared.AcceptDirectConnectGatewayAssociationProposalRequest{
            AssociatedGatewayOwnerAccount: "debitis",
            DirectConnectGatewayID: "ipsa",
            OverrideAllowedPrefixesToDirectConnectGateway: []shared.RouteFilterPrefix{
                shared.RouteFilterPrefix{
                    Cidr: sdk.String("tempora"),
                },
                shared.RouteFilterPrefix{
                    Cidr: sdk.String("suscipit"),
                },
                shared.RouteFilterPrefix{
                    Cidr: sdk.String("molestiae"),
                },
                shared.RouteFilterPrefix{
                    Cidr: sdk.String("minus"),
                },
            },
            ProposalID: "placeat",
        },
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("nisi"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.AcceptDirectConnectGatewayAssociationProposalXAmzTargetEnumOvertureServiceAcceptDirectConnectGatewayAssociationProposal,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptDirectConnectGatewayAssociationProposalResult != nil {
        // handle response
    }
}
```

## ~~AllocateConnectionOnInterconnect~~

<p>Deprecated. Use <a>AllocateHostedConnection</a> instead.</p> <p>Creates a hosted connection on an interconnect.</p> <p>Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AllocateConnectionOnInterconnect(ctx, operations.AllocateConnectionOnInterconnectRequest{
        AllocateConnectionOnInterconnectRequest: shared.AllocateConnectionOnInterconnectRequest{
            Bandwidth: "quis",
            ConnectionName: "veritatis",
            InterconnectID: "deserunt",
            OwnerAccount: "perferendis",
            Vlan: 368241,
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("odit"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.AllocateConnectionOnInterconnectXAmzTargetEnumOvertureServiceAllocateConnectionOnInterconnect,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```

## AllocateHostedConnection

<p>Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects.</p> <p>Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. Amazon Web Services polices the hosted connection for the specified capacity and the Direct Connect Partner must also police the hosted connection for the specified capacity.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AllocateHostedConnection(ctx, operations.AllocateHostedConnectionRequest{
        AllocateHostedConnectionRequest: shared.AllocateHostedConnectionRequest{
            Bandwidth: "molestiae",
            ConnectionID: "quod",
            ConnectionName: "quod",
            OwnerAccount: "esse",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "porro",
                    Value: sdk.String("dolorum"),
                },
                shared.Tag{
                    Key: "dicta",
                    Value: sdk.String("nam"),
                },
                shared.Tag{
                    Key: "officia",
                    Value: sdk.String("occaecati"),
                },
            },
            Vlan: 143353,
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.AllocateHostedConnectionXAmzTargetEnumOvertureServiceAllocateHostedConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```

## AllocatePrivateVirtualInterface

<p>Provisions a private virtual interface to be owned by the specified Amazon Web Services account.</p> <p>Virtual interfaces created using this action must be confirmed by the owner using <a>ConfirmPrivateVirtualInterface</a>. Until then, the virtual interface is in the <code>Confirming</code> state and is not available to handle traffic.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AllocatePrivateVirtualInterface(ctx, operations.AllocatePrivateVirtualInterfaceRequest{
        AllocatePrivateVirtualInterfaceRequest: shared.AllocatePrivateVirtualInterfaceRequest{
            ConnectionID: "modi",
            NewPrivateVirtualInterfaceAllocation: shared.NewPrivateVirtualInterfaceAllocation{
                AddressFamily: shared.AddressFamilyEnumIpv4.ToPointer(),
                AmazonAddress: sdk.String("impedit"),
                Asn: 736918,
                AuthKey: sdk.String("esse"),
                CustomerAddress: sdk.String("ipsum"),
                Mtu: sdk.Int64(568434),
                Tags: []shared.Tag{
                    shared.Tag{
                        Key: "perferendis",
                        Value: sdk.String("ad"),
                    },
                },
                VirtualInterfaceName: "natus",
                Vlan: 149675,
            },
            OwnerAccount: "iste",
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("fuga"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.AllocatePrivateVirtualInterfaceXAmzTargetEnumOvertureServiceAllocatePrivateVirtualInterface,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VirtualInterface != nil {
        // handle response
    }
}
```

## AllocatePublicVirtualInterface

<p>Provisions a public virtual interface to be owned by the specified Amazon Web Services account.</p> <p>The owner of a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web Services account.</p> <p>Virtual interfaces created using this function must be confirmed by the owner using <a>ConfirmPublicVirtualInterface</a>. Until this step has been completed, the virtual interface is in the <code>confirming</code> state and is not available to handle traffic.</p> <p>When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AllocatePublicVirtualInterface(ctx, operations.AllocatePublicVirtualInterfaceRequest{
        AllocatePublicVirtualInterfaceRequest: shared.AllocatePublicVirtualInterfaceRequest{
            ConnectionID: "corporis",
            NewPublicVirtualInterfaceAllocation: shared.NewPublicVirtualInterfaceAllocation{
                AddressFamily: shared.AddressFamilyEnumIpv6.ToPointer(),
                AmazonAddress: sdk.String("iure"),
                Asn: 902349,
                AuthKey: sdk.String("quidem"),
                CustomerAddress: sdk.String("architecto"),
                RouteFilterPrefixes: []shared.RouteFilterPrefix{
                    shared.RouteFilterPrefix{
                        Cidr: sdk.String("reiciendis"),
                    },
                },
                Tags: []shared.Tag{
                    shared.Tag{
                        Key: "mollitia",
                        Value: sdk.String("laborum"),
                    },
                    shared.Tag{
                        Key: "dolores",
                        Value: sdk.String("dolorem"),
                    },
                    shared.Tag{
                        Key: "corporis",
                        Value: sdk.String("explicabo"),
                    },
                },
                VirtualInterfaceName: "nobis",
                Vlan: 315428,
            },
            OwnerAccount: "omnis",
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.AllocatePublicVirtualInterfaceXAmzTargetEnumOvertureServiceAllocatePublicVirtualInterface,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VirtualInterface != nil {
        // handle response
    }
}
```

## AllocateTransitVirtualInterface

<p>Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this type of interface to connect a transit gateway to your Direct Connect gateway.</p> <p>The owner of a connection provisions a transit virtual interface to be owned by the specified Amazon Web Services account.</p> <p>After you create a transit virtual interface, it must be confirmed by the owner using <a>ConfirmTransitVirtualInterface</a>. Until this step has been completed, the transit virtual interface is in the <code>requested</code> state and is not available to handle traffic.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AllocateTransitVirtualInterface(ctx, operations.AllocateTransitVirtualInterfaceRequest{
        AllocateTransitVirtualInterfaceRequest: shared.AllocateTransitVirtualInterfaceRequest{
            ConnectionID: "sapiente",
            NewTransitVirtualInterfaceAllocation: shared.NewTransitVirtualInterfaceAllocation{
                AddressFamily: shared.AddressFamilyEnumIpv4.ToPointer(),
                AmazonAddress: sdk.String("mollitia"),
                Asn: sdk.Int64(208876),
                AuthKey: sdk.String("culpa"),
                CustomerAddress: sdk.String("consequuntur"),
                Mtu: sdk.Int64(995300),
                Tags: []shared.Tag{
                    shared.Tag{
                        Key: "occaecati",
                        Value: sdk.String("numquam"),
                    },
                    shared.Tag{
                        Key: "commodi",
                        Value: sdk.String("quam"),
                    },
                    shared.Tag{
                        Key: "molestiae",
                        Value: sdk.String("velit"),
                    },
                },
                VirtualInterfaceName: sdk.String("error"),
                Vlan: sdk.Int64(158969),
            },
            OwnerAccount: "quis",
        },
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("animi"),
        XAmzDate: sdk.String("enim"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("sequi"),
        XAmzTarget: operations.AllocateTransitVirtualInterfaceXAmzTargetEnumOvertureServiceAllocateTransitVirtualInterface,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AllocateTransitVirtualInterfaceResult != nil {
        // handle response
    }
}
```

## AssociateConnectionWithLag

<p>Associates an existing connection with a link aggregation group (LAG). The connection is interrupted and re-established as a member of the LAG (connectivity to Amazon Web Services is interrupted). The connection must be hosted on the same Direct Connect endpoint as the LAG, and its bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's currently associated with a different LAG; however, if removing the connection would cause the original LAG to fall below its setting for minimum number of operational connections, the request fails.</p> <p>Any virtual interfaces that are directly associated with the connection are automatically re-associated with the LAG. If the connection was originally associated with a different LAG, the virtual interfaces remain associated with the original LAG.</p> <p>For interconnects, any hosted connections are automatically re-associated with the LAG. If the interconnect was originally associated with a different LAG, the hosted connections remain associated with the original LAG.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateConnectionWithLag(ctx, operations.AssociateConnectionWithLagRequest{
        AssociateConnectionWithLagRequest: shared.AssociateConnectionWithLagRequest{
            ConnectionID: "tenetur",
            LagID: "ipsam",
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzTarget: operations.AssociateConnectionWithLagXAmzTargetEnumOvertureServiceAssociateConnectionWithLag,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```

## AssociateHostedConnection

<p>Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG) or interconnect. If the target interconnect or LAG has an existing hosted connection with a conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts the hosted connection's connectivity to Amazon Web Services as it is being migrated.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateHostedConnection(ctx, operations.AssociateHostedConnectionRequest{
        AssociateHostedConnectionRequest: shared.AssociateHostedConnectionRequest{
            ConnectionID: "quasi",
            ParentConnectionID: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.AssociateHostedConnectionXAmzTargetEnumOvertureServiceAssociateHostedConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```

## AssociateMacSecKey

<p>Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key (CAK) pair with an Direct Connect dedicated connection.</p> <p>You must supply either the <code>secretARN,</code> or the CKN/CAK (<code>ckn</code> and <code>cak</code>) pair in the request.</p> <p>For information about MAC Security (MACsec) key considerations, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/direct-connect-mac-sec-getting-started.html#mac-sec-key-consideration">MACsec pre-shared CKN/CAK key considerations </a> in the <i>Direct Connect User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateMacSecKey(ctx, operations.AssociateMacSecKeyRequest{
        AssociateMacSecKeyRequest: shared.AssociateMacSecKeyRequest{
            Cak: sdk.String("voluptate"),
            Ckn: sdk.String("cum"),
            ConnectionID: "perferendis",
            SecretARN: sdk.String("doloremque"),
        },
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("ut"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzTarget: operations.AssociateMacSecKeyXAmzTargetEnumOvertureServiceAssociateMacSecKey,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateMacSecKeyResponse != nil {
        // handle response
    }
}
```

## AssociateVirtualInterface

<p>Associates a virtual interface with a specified link aggregation group (LAG) or connection. Connectivity to Amazon Web Services is temporarily interrupted as the virtual interface is being migrated. If the target connection or LAG has an associated virtual interface with a conflicting VLAN number or a conflicting IP address, the operation fails.</p> <p>Virtual interfaces associated with a hosted connection cannot be associated with a LAG; hosted connections must be migrated along with their virtual interfaces using <a>AssociateHostedConnection</a>.</p> <p>To reassociate a virtual interface to a new connection or LAG, the requester must own either the virtual interface itself or the connection to which the virtual interface is currently associated. Additionally, the requester must own the connection or LAG for the association.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateVirtualInterface(ctx, operations.AssociateVirtualInterfaceRequest{
        AssociateVirtualInterfaceRequest: shared.AssociateVirtualInterfaceRequest{
            ConnectionID: "dicta",
            VirtualInterfaceID: "harum",
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.AssociateVirtualInterfaceXAmzTargetEnumOvertureServiceAssociateVirtualInterface,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VirtualInterface != nil {
        // handle response
    }
}
```

## ConfirmConnection

<p>Confirms the creation of the specified hosted connection on an interconnect.</p> <p>Upon creation, the hosted connection is initially in the <code>Ordering</code> state, and remains in this state until the owner confirms creation of the hosted connection.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ConfirmConnection(ctx, operations.ConfirmConnectionRequest{
        ConfirmConnectionRequest: shared.ConfirmConnectionRequest{
            ConnectionID: "molestias",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("voluptates"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzTarget: operations.ConfirmConnectionXAmzTargetEnumOvertureServiceConfirmConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfirmConnectionResponse != nil {
        // handle response
    }
}
```

## ConfirmCustomerAgreement

 The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG). 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ConfirmCustomerAgreement(ctx, operations.ConfirmCustomerAgreementRequest{
        ConfirmCustomerAgreementRequest: shared.ConfirmCustomerAgreementRequest{
            AgreementName: sdk.String("repudiandae"),
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("est"),
        XAmzTarget: operations.ConfirmCustomerAgreementXAmzTargetEnumOvertureServiceConfirmCustomerAgreement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfirmCustomerAgreementResponse != nil {
        // handle response
    }
}
```

## ConfirmPrivateVirtualInterface

<p>Accepts ownership of a private virtual interface created by another Amazon Web Services account.</p> <p>After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ConfirmPrivateVirtualInterface(ctx, operations.ConfirmPrivateVirtualInterfaceRequest{
        ConfirmPrivateVirtualInterfaceRequest: shared.ConfirmPrivateVirtualInterfaceRequest{
            DirectConnectGatewayID: sdk.String("quibusdam"),
            VirtualGatewayID: sdk.String("explicabo"),
            VirtualInterfaceID: "deserunt",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.ConfirmPrivateVirtualInterfaceXAmzTargetEnumOvertureServiceConfirmPrivateVirtualInterface,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfirmPrivateVirtualInterfaceResponse != nil {
        // handle response
    }
}
```

## ConfirmPublicVirtualInterface

<p>Accepts ownership of a public virtual interface created by another Amazon Web Services account.</p> <p>After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ConfirmPublicVirtualInterface(ctx, operations.ConfirmPublicVirtualInterfaceRequest{
        ConfirmPublicVirtualInterfaceRequest: shared.ConfirmPublicVirtualInterfaceRequest{
            VirtualInterfaceID: "quos",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("magni"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.ConfirmPublicVirtualInterfaceXAmzTargetEnumOvertureServiceConfirmPublicVirtualInterface,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfirmPublicVirtualInterfaceResponse != nil {
        // handle response
    }
}
```

## ConfirmTransitVirtualInterface

<p>Accepts ownership of a transit virtual interface created by another Amazon Web Services account.</p> <p> After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ConfirmTransitVirtualInterface(ctx, operations.ConfirmTransitVirtualInterfaceRequest{
        ConfirmTransitVirtualInterfaceRequest: shared.ConfirmTransitVirtualInterfaceRequest{
            DirectConnectGatewayID: "excepturi",
            VirtualInterfaceID: "tempora",
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("eligendi"),
        XAmzTarget: operations.ConfirmTransitVirtualInterfaceXAmzTargetEnumOvertureServiceConfirmTransitVirtualInterface,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConfirmTransitVirtualInterfaceResponse != nil {
        // handle response
    }
}
```

## CreateBGPPeer

<p>Creates a BGP peer on the specified virtual interface.</p> <p>You must create a BGP peer for the corresponding address family (IPv4/IPv6) in order to access Amazon Web Services resources that also use that address family.</p> <p>If logical redundancy is not supported by the connection, interconnect, or LAG, the BGP peer cannot be in the same address family as an existing BGP peer on the virtual interface.</p> <p>When creating a IPv6 BGP peer, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.</p> <important> <p>If you let Amazon Web Services auto-assign IPv4 addresses, a /30 CIDR will be allocated from 169.254.0.0/16. Amazon Web Services does not recommend this option if you intend to use the customer router peer IP address as the source and destination for traffic. Instead you should use RFC 1918 or other addressing, and specify the address yourself. For more information about RFC 1918 see <a href="https://datatracker.ietf.org/doc/html/rfc1918"> Address Allocation for Private Internets</a>.</p> </important> <p>For a public virtual interface, the Autonomous System Number (ASN) must be private or already on the allow list for the virtual interface.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateBGPPeer(ctx, operations.CreateBGPPeerRequest{
        CreateBGPPeerRequest: shared.CreateBGPPeerRequest{
            NewBGPPeer: &shared.NewBGPPeer{
                AddressFamily: shared.AddressFamilyEnumIpv6.ToPointer(),
                AmazonAddress: sdk.String("aliquid"),
                Asn: sdk.Int64(592042),
                AuthKey: sdk.String("necessitatibus"),
                CustomerAddress: sdk.String("sint"),
            },
            VirtualInterfaceID: sdk.String("officia"),
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("illum"),
        XAmzTarget: operations.CreateBGPPeerXAmzTargetEnumOvertureServiceCreateBgpPeer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBGPPeerResponse != nil {
        // handle response
    }
}
```

## CreateConnection

<p>Creates a connection between a customer network and a specific Direct Connect location.</p> <p>A connection links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end of the cable is connected to your router, the other to an Direct Connect router.</p> <p>To find the locations for your Region, use <a>DescribeLocations</a>.</p> <p>You can automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new connection is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no connection is created.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateConnection(ctx, operations.CreateConnectionRequest{
        CreateConnectionRequest: shared.CreateConnectionRequest{
            Bandwidth: "maiores",
            ConnectionName: "rerum",
            LagID: sdk.String("dicta"),
            Location: "magnam",
            ProviderName: sdk.String("cumque"),
            RequestMACSec: sdk.Bool(false),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "ea",
                    Value: sdk.String("aliquid"),
                },
                shared.Tag{
                    Key: "laborum",
                    Value: sdk.String("accusamus"),
                },
                shared.Tag{
                    Key: "non",
                    Value: sdk.String("occaecati"),
                },
                shared.Tag{
                    Key: "enim",
                    Value: sdk.String("accusamus"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.CreateConnectionXAmzTargetEnumOvertureServiceCreateConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```

## CreateDirectConnectGateway

Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a set of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and visible in any Amazon Web Services Region after it is created. The virtual interfaces and virtual private gateways that are connected through a Direct Connect gateway can be in different Amazon Web Services Regions. This enables you to connect to a VPC in any Region, regardless of the Region in which the virtual interfaces are located, and pass traffic between them.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateDirectConnectGateway(ctx, operations.CreateDirectConnectGatewayRequest{
        CreateDirectConnectGatewayRequest: shared.CreateDirectConnectGatewayRequest{
            AmazonSideAsn: sdk.Int64(956084),
            DirectConnectGatewayName: "amet",
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("nisi"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.CreateDirectConnectGatewayXAmzTargetEnumOvertureServiceCreateDirectConnectGateway,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDirectConnectGatewayResult != nil {
        // handle response
    }
}
```

## CreateDirectConnectGatewayAssociation

Creates an association between a Direct Connect gateway and a virtual private gateway. The virtual private gateway must be attached to a VPC and must not be associated with another Direct Connect gateway.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateDirectConnectGatewayAssociation(ctx, operations.CreateDirectConnectGatewayAssociationRequest{
        CreateDirectConnectGatewayAssociationRequest: shared.CreateDirectConnectGatewayAssociationRequest{
            AddAllowedPrefixesToDirectConnectGateway: []shared.RouteFilterPrefix{
                shared.RouteFilterPrefix{
                    Cidr: sdk.String("magnam"),
                },
                shared.RouteFilterPrefix{
                    Cidr: sdk.String("distinctio"),
                },
            },
            DirectConnectGatewayID: "id",
            GatewayID: sdk.String("labore"),
            VirtualGatewayID: sdk.String("labore"),
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.CreateDirectConnectGatewayAssociationXAmzTargetEnumOvertureServiceCreateDirectConnectGatewayAssociation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDirectConnectGatewayAssociationResult != nil {
        // handle response
    }
}
```

## CreateDirectConnectGatewayAssociationProposal

<p>Creates a proposal to associate the specified virtual private gateway or transit gateway with the specified Direct Connect gateway.</p> <p>You can associate a Direct Connect gateway and virtual private gateway or transit gateway that is owned by any Amazon Web Services account. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateDirectConnectGatewayAssociationProposal(ctx, operations.CreateDirectConnectGatewayAssociationProposalRequest{
        CreateDirectConnectGatewayAssociationProposalRequest: shared.CreateDirectConnectGatewayAssociationProposalRequest{
            AddAllowedPrefixesToDirectConnectGateway: []shared.RouteFilterPrefix{
                shared.RouteFilterPrefix{
                    Cidr: sdk.String("et"),
                },
                shared.RouteFilterPrefix{
                    Cidr: sdk.String("excepturi"),
                },
            },
            DirectConnectGatewayID: "ullam",
            DirectConnectGatewayOwnerAccount: "provident",
            GatewayID: "quos",
            RemoveAllowedPrefixesToDirectConnectGateway: []shared.RouteFilterPrefix{
                shared.RouteFilterPrefix{
                    Cidr: sdk.String("accusantium"),
                },
                shared.RouteFilterPrefix{
                    Cidr: sdk.String("mollitia"),
                },
                shared.RouteFilterPrefix{
                    Cidr: sdk.String("reiciendis"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.CreateDirectConnectGatewayAssociationProposalXAmzTargetEnumOvertureServiceCreateDirectConnectGatewayAssociationProposal,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDirectConnectGatewayAssociationProposalResult != nil {
        // handle response
    }
}
```

## CreateInterconnect

<p>Creates an interconnect between an Direct Connect Partner's network and a specific Direct Connect location.</p> <p>An interconnect is a connection that is capable of hosting other connections. The Direct Connect Partner can use an interconnect to provide Direct Connect hosted connections to customers through their own network services. Like a standard connection, an interconnect links the partner's network to an Direct Connect location over a standard Ethernet fiber-optic cable. One end is connected to the partner's router, the other to an Direct Connect router.</p> <p>You can automatically add the new interconnect to a link aggregation group (LAG) by specifying a LAG ID in the request. This ensures that the new interconnect is allocated on the same Direct Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the request fails and no interconnect is created.</p> <p>For each end customer, the Direct Connect Partner provisions a connection on their interconnect by calling <a>AllocateHostedConnection</a>. The end customer can then connect to Amazon Web Services resources by creating a virtual interface on their connection, using the VLAN assigned to them by the Direct Connect Partner.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateInterconnect(ctx, operations.CreateInterconnectRequest{
        CreateInterconnectRequest: shared.CreateInterconnectRequest{
            Bandwidth: "quasi",
            InterconnectName: "iure",
            LagID: sdk.String("doloribus"),
            Location: "debitis",
            ProviderName: sdk.String("eius"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "deleniti",
                    Value: sdk.String("facilis"),
                },
                shared.Tag{
                    Key: "in",
                    Value: sdk.String("architecto"),
                },
                shared.Tag{
                    Key: "architecto",
                    Value: sdk.String("repudiandae"),
                },
                shared.Tag{
                    Key: "ullam",
                    Value: sdk.String("expedita"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.CreateInterconnectXAmzTargetEnumOvertureServiceCreateInterconnect,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Interconnect != nil {
        // handle response
    }
}
```

## CreateLag

<p>Creates a link aggregation group (LAG) with the specified number of bundled physical dedicated connections between the customer network and a specific Direct Connect location. A LAG is a logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple interfaces, enabling you to treat them as a single interface.</p> <p>All connections in a LAG must use the same bandwidth (either 1Gbps or 10Gbps) and must terminate at the same Direct Connect endpoint.</p> <p>You can have up to 10 dedicated connections per LAG. Regardless of this limit, if you request more connections for the LAG than Direct Connect can allocate on a single endpoint, no LAG is created.</p> <p>You can specify an existing physical dedicated connection or interconnect to include in the LAG (which counts towards the total number of connections). Doing so interrupts the current physical dedicated connection, and re-establishes them as a member of the LAG. The LAG will be created on the same Direct Connect endpoint to which the dedicated connection terminates. Any virtual interfaces associated with the dedicated connection are automatically disassociated and re-associated with the LAG. The connection ID does not change.</p> <p>If the Amazon Web Services account used to create a LAG is a registered Direct Connect Partner, the LAG is automatically enabled to host sub-connections. For a LAG owned by a partner, any associated virtual interfaces cannot be directly configured.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateLag(ctx, operations.CreateLagRequest{
        CreateLagRequest: shared.CreateLagRequest{
            ChildConnectionTags: []shared.Tag{
                shared.Tag{
                    Key: "praesentium",
                    Value: sdk.String("natus"),
                },
            },
            ConnectionID: sdk.String("magni"),
            ConnectionsBandwidth: "sunt",
            LagName: "quo",
            Location: "illum",
            NumberOfConnections: 864934,
            ProviderName: sdk.String("maxime"),
            RequestMACSec: sdk.Bool(false),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "excepturi",
                    Value: sdk.String("odit"),
                },
                shared.Tag{
                    Key: "ea",
                    Value: sdk.String("accusantium"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("autem"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.CreateLagXAmzTargetEnumOvertureServiceCreateLag,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Lag != nil {
        // handle response
    }
}
```

## CreatePrivateVirtualInterface

<p>Creates a private virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A private virtual interface can be connected to either a Direct Connect gateway or a Virtual Private Gateway (VGW). Connecting the private virtual interface to a Direct Connect gateway enables the possibility for connecting to multiple VPCs, including VPCs in different Amazon Web Services Regions. Connecting the private virtual interface to a VGW only provides access to a single VPC within the same Region.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePrivateVirtualInterface(ctx, operations.CreatePrivateVirtualInterfaceRequest{
        CreatePrivateVirtualInterfaceRequest: shared.CreatePrivateVirtualInterfaceRequest{
            ConnectionID: "eaque",
            NewPrivateVirtualInterface: shared.NewPrivateVirtualInterface{
                AddressFamily: shared.AddressFamilyEnumIpv6.ToPointer(),
                AmazonAddress: sdk.String("nemo"),
                Asn: 975522,
                AuthKey: sdk.String("perferendis"),
                CustomerAddress: sdk.String("fugiat"),
                DirectConnectGatewayID: sdk.String("amet"),
                EnableSiteLink: sdk.Bool(false),
                Mtu: sdk.Int64(11714),
                Tags: []shared.Tag{
                    shared.Tag{
                        Key: "corporis",
                        Value: sdk.String("hic"),
                    },
                    shared.Tag{
                        Key: "libero",
                        Value: sdk.String("nobis"),
                    },
                    shared.Tag{
                        Key: "dolores",
                        Value: sdk.String("quis"),
                    },
                    shared.Tag{
                        Key: "totam",
                        Value: sdk.String("dignissimos"),
                    },
                },
                VirtualGatewayID: sdk.String("eaque"),
                VirtualInterfaceName: "quis",
                Vlan: 199996,
            },
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.CreatePrivateVirtualInterfaceXAmzTargetEnumOvertureServiceCreatePrivateVirtualInterface,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VirtualInterface != nil {
        // handle response
    }
}
```

## CreatePublicVirtualInterface

<p>Creates a public virtual interface. A virtual interface is the VLAN that transports Direct Connect traffic. A public virtual interface supports sending traffic to public services of Amazon Web Services such as Amazon S3.</p> <p>When creating an IPv6 public virtual interface (<code>addressFamily</code> is <code>ipv6</code>), leave the <code>customer</code> and <code>amazon</code> address fields blank to use auto-assigned IPv6 space. Custom IPv6 addresses are not supported.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePublicVirtualInterface(ctx, operations.CreatePublicVirtualInterfaceRequest{
        CreatePublicVirtualInterfaceRequest: shared.CreatePublicVirtualInterfaceRequest{
            ConnectionID: "nostrum",
            NewPublicVirtualInterface: shared.NewPublicVirtualInterface{
                AddressFamily: shared.AddressFamilyEnumIpv6.ToPointer(),
                AmazonAddress: sdk.String("recusandae"),
                Asn: 608253,
                AuthKey: sdk.String("facilis"),
                CustomerAddress: sdk.String("perspiciatis"),
                RouteFilterPrefixes: []shared.RouteFilterPrefix{
                    shared.RouteFilterPrefix{
                        Cidr: sdk.String("porro"),
                    },
                },
                Tags: []shared.Tag{
                    shared.Tag{
                        Key: "blanditiis",
                        Value: sdk.String("error"),
                    },
                },
                VirtualInterfaceName: "eaque",
                Vlan: 577229,
            },
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("asperiores"),
        XAmzDate: sdk.String("earum"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.CreatePublicVirtualInterfaceXAmzTargetEnumOvertureServiceCreatePublicVirtualInterface,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VirtualInterface != nil {
        // handle response
    }
}
```

## CreateTransitVirtualInterface

<p>Creates a transit virtual interface. A transit virtual interface should be used to access one or more transit gateways associated with Direct Connect gateways. A transit virtual interface enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect gateway.</p> <important> <p>If you associate your transit gateway with one or more Direct Connect gateways, the Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must be different. For example, if you use the default ASN 64512 for both your the transit gateway and Direct Connect gateway, the association request fails.</p> </important> <p>A jumbo MTU value must be either 1500 or 8500. No other values will be accepted. Setting the MTU of a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateTransitVirtualInterface(ctx, operations.CreateTransitVirtualInterfaceRequest{
        CreateTransitVirtualInterfaceRequest: shared.CreateTransitVirtualInterfaceRequest{
            ConnectionID: "deleniti",
            NewTransitVirtualInterface: shared.NewTransitVirtualInterface{
                AddressFamily: shared.AddressFamilyEnumIpv6.ToPointer(),
                AmazonAddress: sdk.String("provident"),
                Asn: sdk.Int64(750844),
                AuthKey: sdk.String("libero"),
                CustomerAddress: sdk.String("delectus"),
                DirectConnectGatewayID: sdk.String("quaerat"),
                EnableSiteLink: sdk.Bool(false),
                Mtu: sdk.Int64(554242),
                Tags: []shared.Tag{
                    shared.Tag{
                        Key: "dolorem",
                        Value: sdk.String("dolorem"),
                    },
                    shared.Tag{
                        Key: "dolor",
                        Value: sdk.String("qui"),
                    },
                },
                VirtualInterfaceName: sdk.String("ipsum"),
                Vlan: sdk.Int64(944373),
            },
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.CreateTransitVirtualInterfaceXAmzTargetEnumOvertureServiceCreateTransitVirtualInterface,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTransitVirtualInterfaceResult != nil {
        // handle response
    }
}
```

## DeleteBGPPeer

<p>Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.</p> <p>You cannot delete the last BGP peer from a virtual interface.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteBGPPeer(ctx, operations.DeleteBGPPeerRequest{
        DeleteBGPPeerRequest: shared.DeleteBGPPeerRequest{
            Asn: sdk.Int64(254356),
            BgpPeerID: sdk.String("veritatis"),
            CustomerAddress: sdk.String("ipsa"),
            VirtualInterfaceID: sdk.String("ipsa"),
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.DeleteBGPPeerXAmzTargetEnumOvertureServiceDeleteBgpPeer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBGPPeerResponse != nil {
        // handle response
    }
}
```

## DeleteConnection

<p>Deletes the specified connection.</p> <p>Deleting a connection only stops the Direct Connect port hour and data transfer charges. If you are partnering with any third parties to connect with the Direct Connect location, you must cancel your service with them separately.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteConnection(ctx, operations.DeleteConnectionRequest{
        DeleteConnectionRequest: shared.DeleteConnectionRequest{
            ConnectionID: "natus",
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.DeleteConnectionXAmzTargetEnumOvertureServiceDeleteConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```

## DeleteDirectConnectGateway

Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are attached to the Direct Connect gateway and disassociate all virtual private gateways associated with the Direct Connect gateway.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDirectConnectGateway(ctx, operations.DeleteDirectConnectGatewayRequest{
        DeleteDirectConnectGatewayRequest: shared.DeleteDirectConnectGatewayRequest{
            DirectConnectGatewayID: "iusto",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.DeleteDirectConnectGatewayXAmzTargetEnumOvertureServiceDeleteDirectConnectGateway,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDirectConnectGatewayResult != nil {
        // handle response
    }
}
```

## DeleteDirectConnectGatewayAssociation

<p>Deletes the association between the specified Direct Connect gateway and virtual private gateway.</p> <p>We recommend that you specify the <code>associationID</code> to delete the association. Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can specify the <code>virtualGatewayId</code> and <code>directConnectGatewayId</code> to delete an association.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDirectConnectGatewayAssociation(ctx, operations.DeleteDirectConnectGatewayAssociationRequest{
        DeleteDirectConnectGatewayAssociationRequest: shared.DeleteDirectConnectGatewayAssociationRequest{
            AssociationID: sdk.String("nihil"),
            DirectConnectGatewayID: sdk.String("ipsum"),
            VirtualGatewayID: sdk.String("voluptate"),
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("optio"),
        XAmzTarget: operations.DeleteDirectConnectGatewayAssociationXAmzTargetEnumOvertureServiceDeleteDirectConnectGatewayAssociation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDirectConnectGatewayAssociationResult != nil {
        // handle response
    }
}
```

## DeleteDirectConnectGatewayAssociationProposal

Deletes the association proposal request between the specified Direct Connect gateway and virtual private gateway or transit gateway.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteDirectConnectGatewayAssociationProposal(ctx, operations.DeleteDirectConnectGatewayAssociationProposalRequest{
        DeleteDirectConnectGatewayAssociationProposalRequest: shared.DeleteDirectConnectGatewayAssociationProposalRequest{
            ProposalID: "accusamus",
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzTarget: operations.DeleteDirectConnectGatewayAssociationProposalXAmzTargetEnumOvertureServiceDeleteDirectConnectGatewayAssociationProposal,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDirectConnectGatewayAssociationProposalResult != nil {
        // handle response
    }
}
```

## DeleteInterconnect

<p>Deletes the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteInterconnect(ctx, operations.DeleteInterconnectRequest{
        DeleteInterconnectRequest: shared.DeleteInterconnectRequest{
            InterconnectID: "totam",
        },
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.DeleteInterconnectXAmzTargetEnumOvertureServiceDeleteInterconnect,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteInterconnectResponse != nil {
        // handle response
    }
}
```

## DeleteLag

Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active virtual interfaces or hosted connections.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteLag(ctx, operations.DeleteLagRequest{
        DeleteLagRequest: shared.DeleteLagRequest{
            LagID: "officiis",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.DeleteLagXAmzTargetEnumOvertureServiceDeleteLag,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Lag != nil {
        // handle response
    }
}
```

## DeleteVirtualInterface

Deletes a virtual interface.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteVirtualInterface(ctx, operations.DeleteVirtualInterfaceRequest{
        DeleteVirtualInterfaceRequest: shared.DeleteVirtualInterfaceRequest{
            VirtualInterfaceID: "quisquam",
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.DeleteVirtualInterfaceXAmzTargetEnumOvertureServiceDeleteVirtualInterface,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteVirtualInterfaceResponse != nil {
        // handle response
    }
}
```

## ~~DescribeConnectionLoa~~

<p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for a connection.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or service provider uses when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeConnectionLoa(ctx, operations.DescribeConnectionLoaRequest{
        DescribeConnectionLoaRequest: shared.DescribeConnectionLoaRequest{
            ConnectionID: "sapiente",
            LoaContentType: shared.LoaContentTypeEnumApplicationPdf.ToPointer(),
            ProviderName: sdk.String("totam"),
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.DescribeConnectionLoaXAmzTargetEnumOvertureServiceDescribeConnectionLoa,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConnectionLoaResponse != nil {
        // handle response
    }
}
```

## DescribeConnections

Displays the specified connection or all connections in this Region.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeConnections(ctx, operations.DescribeConnectionsRequest{
        DescribeConnectionsRequest: shared.DescribeConnectionsRequest{
            ConnectionID: sdk.String("voluptas"),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("maxime"),
        XAmzTarget: operations.DescribeConnectionsXAmzTargetEnumOvertureServiceDescribeConnections,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connections != nil {
        // handle response
    }
}
```

## ~~DescribeConnectionsOnInterconnect~~

<p>Deprecated. Use <a>DescribeHostedConnections</a> instead.</p> <p>Lists the connections that have been provisioned on the specified interconnect.</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeConnectionsOnInterconnect(ctx, operations.DescribeConnectionsOnInterconnectRequest{
        DescribeConnectionsOnInterconnectRequest: shared.DescribeConnectionsOnInterconnectRequest{
            InterconnectID: "pariatur",
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.DescribeConnectionsOnInterconnectXAmzTargetEnumOvertureServiceDescribeConnectionsOnInterconnect,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connections != nil {
        // handle response
    }
}
```

## DescribeCustomerMetadata

Get and view a list of customer agreements, along with their signed status and whether the customer is an NNIPartner, NNIPartnerV2, or a nonPartner. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeCustomerMetadata(ctx, operations.DescribeCustomerMetadataRequest{
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.DescribeCustomerMetadataXAmzTargetEnumOvertureServiceDescribeCustomerMetadata,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCustomerMetadataResponse != nil {
        // handle response
    }
}
```

## DescribeDirectConnectGatewayAssociationProposals

Describes one or more association proposals for connection between a virtual private gateway or transit gateway and a Direct Connect gateway. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDirectConnectGatewayAssociationProposals(ctx, operations.DescribeDirectConnectGatewayAssociationProposalsRequest{
        DescribeDirectConnectGatewayAssociationProposalsRequest: shared.DescribeDirectConnectGatewayAssociationProposalsRequest{
            AssociatedGatewayID: sdk.String("neque"),
            DirectConnectGatewayID: sdk.String("fugit"),
            MaxResults: sdk.Int64(164959),
            NextToken: sdk.String("odio"),
            ProposalID: sdk.String("sunt"),
        },
        XAmzAlgorithm: sdk.String("ullam"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("soluta"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.DescribeDirectConnectGatewayAssociationProposalsXAmzTargetEnumOvertureServiceDescribeDirectConnectGatewayAssociationProposals,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDirectConnectGatewayAssociationProposalsResult != nil {
        // handle response
    }
}
```

## DescribeDirectConnectGatewayAssociations

<p>Lists the associations between your Direct Connect gateways and virtual private gateways and transit gateways. You must specify one of the following:</p> <ul> <li> <p>A Direct Connect gateway</p> <p>The response contains all virtual private gateways and transit gateways associated with the Direct Connect gateway.</p> </li> <li> <p>A virtual private gateway</p> <p>The response contains the Direct Connect gateway.</p> </li> <li> <p>A transit gateway</p> <p>The response contains the Direct Connect gateway.</p> </li> <li> <p>A Direct Connect gateway and a virtual private gateway</p> <p>The response contains the association between the Direct Connect gateway and virtual private gateway.</p> </li> <li> <p>A Direct Connect gateway and a transit gateway</p> <p>The response contains the association between the Direct Connect gateway and transit gateway.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDirectConnectGatewayAssociations(ctx, operations.DescribeDirectConnectGatewayAssociationsRequest{
        DescribeDirectConnectGatewayAssociationsRequest: shared.DescribeDirectConnectGatewayAssociationsRequest{
            AssociatedGatewayID: sdk.String("et"),
            AssociationID: sdk.String("saepe"),
            DirectConnectGatewayID: sdk.String("ipsum"),
            MaxResults: sdk.Int64(83422),
            NextToken: sdk.String("nobis"),
            VirtualGatewayID: sdk.String("quos"),
        },
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.DescribeDirectConnectGatewayAssociationsXAmzTargetEnumOvertureServiceDescribeDirectConnectGatewayAssociations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDirectConnectGatewayAssociationsResult != nil {
        // handle response
    }
}
```

## DescribeDirectConnectGatewayAttachments

Lists the attachments between your Direct Connect gateways and virtual interfaces. You must specify a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect gateway, the response contains all virtual interfaces attached to the Direct Connect gateway. If you specify a virtual interface, the response contains all Direct Connect gateways attached to the virtual interface. If you specify both, the response contains the attachment between the Direct Connect gateway and the virtual interface.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDirectConnectGatewayAttachments(ctx, operations.DescribeDirectConnectGatewayAttachmentsRequest{
        DescribeDirectConnectGatewayAttachmentsRequest: shared.DescribeDirectConnectGatewayAttachmentsRequest{
            DirectConnectGatewayID: sdk.String("adipisci"),
            MaxResults: sdk.Int64(677263),
            NextToken: sdk.String("architecto"),
            VirtualInterfaceID: sdk.String("quae"),
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.DescribeDirectConnectGatewayAttachmentsXAmzTargetEnumOvertureServiceDescribeDirectConnectGatewayAttachments,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDirectConnectGatewayAttachmentsResult != nil {
        // handle response
    }
}
```

## DescribeDirectConnectGateways

Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted Direct Connect gateways are not returned.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDirectConnectGateways(ctx, operations.DescribeDirectConnectGatewaysRequest{
        DescribeDirectConnectGatewaysRequest: shared.DescribeDirectConnectGatewaysRequest{
            DirectConnectGatewayID: sdk.String("doloribus"),
            MaxResults: sdk.Int64(281730),
            NextToken: sdk.String("facilis"),
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.DescribeDirectConnectGatewaysXAmzTargetEnumOvertureServiceDescribeDirectConnectGateways,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDirectConnectGatewaysResult != nil {
        // handle response
    }
}
```

## DescribeHostedConnections

<p>Lists the hosted connections that have been provisioned on the specified interconnect or link aggregation group (LAG).</p> <note> <p>Intended for use by Direct Connect Partners only.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeHostedConnections(ctx, operations.DescribeHostedConnectionsRequest{
        DescribeHostedConnectionsRequest: shared.DescribeHostedConnectionsRequest{
            ConnectionID: "quisquam",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("voluptate"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.DescribeHostedConnectionsXAmzTargetEnumOvertureServiceDescribeHostedConnections,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connections != nil {
        // handle response
    }
}
```

## ~~DescribeInterconnectLoa~~

<p>Deprecated. Use <a>DescribeLoa</a> instead.</p> <p>Gets the LOA-CFA for the specified interconnect.</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeInterconnectLoa(ctx, operations.DescribeInterconnectLoaRequest{
        DescribeInterconnectLoaRequest: shared.DescribeInterconnectLoaRequest{
            InterconnectID: "vero",
            LoaContentType: shared.LoaContentTypeEnumApplicationPdf.ToPointer(),
            ProviderName: sdk.String("tenetur"),
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.DescribeInterconnectLoaXAmzTargetEnumOvertureServiceDescribeInterconnectLoa,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeInterconnectLoaResponse != nil {
        // handle response
    }
}
```

## DescribeInterconnects

Lists the interconnects owned by the Amazon Web Services account or only the specified interconnect.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeInterconnects(ctx, operations.DescribeInterconnectsRequest{
        DescribeInterconnectsRequest: shared.DescribeInterconnectsRequest{
            InterconnectID: sdk.String("vero"),
        },
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.DescribeInterconnectsXAmzTargetEnumOvertureServiceDescribeInterconnects,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Interconnects != nil {
        // handle response
    }
}
```

## DescribeLags

Describes all your link aggregation groups (LAG) or the specified LAG.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeLags(ctx, operations.DescribeLagsRequest{
        DescribeLagsRequest: shared.DescribeLagsRequest{
            LagID: sdk.String("aut"),
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.DescribeLagsXAmzTargetEnumOvertureServiceDescribeLags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Lags != nil {
        // handle response
    }
}
```

## DescribeLoa

<p>Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG).</p> <p>The Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when establishing your cross connect to Amazon Web Services at the colocation facility. For more information, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/Colocation.html">Requesting Cross Connects at Direct Connect Locations</a> in the <i>Direct Connect User Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeLoa(ctx, operations.DescribeLoaRequest{
        DescribeLoaRequest: shared.DescribeLoaRequest{
            ConnectionID: "iusto",
            LoaContentType: shared.LoaContentTypeEnumApplicationPdf.ToPointer(),
            ProviderName: sdk.String("eligendi"),
        },
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.DescribeLoaXAmzTargetEnumOvertureServiceDescribeLoa,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Loa != nil {
        // handle response
    }
}
```

## DescribeLocations

Lists the Direct Connect locations in the current Amazon Web Services Region. These are the locations that can be selected when calling <a>CreateConnection</a> or <a>CreateInterconnect</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeLocations(ctx, operations.DescribeLocationsRequest{
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.DescribeLocationsXAmzTargetEnumOvertureServiceDescribeLocations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Locations != nil {
        // handle response
    }
}
```

## DescribeRouterConfiguration

 Details about the router. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRouterConfiguration(ctx, operations.DescribeRouterConfigurationRequest{
        DescribeRouterConfigurationRequest: shared.DescribeRouterConfigurationRequest{
            RouterTypeIdentifier: sdk.String("dolor"),
            VirtualInterfaceID: "maiores",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.DescribeRouterConfigurationXAmzTargetEnumOvertureServiceDescribeRouterConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRouterConfigurationResponse != nil {
        // handle response
    }
}
```

## DescribeTags

Describes the tags associated with the specified Direct Connect resources.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeTags(ctx, operations.DescribeTagsRequest{
        DescribeTagsRequest: shared.DescribeTagsRequest{
            ResourceArns: []string{
                "saepe",
                "ea",
                "impedit",
                "corporis",
            },
        },
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("inventore"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.DescribeTagsXAmzTargetEnumOvertureServiceDescribeTags,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTagsResponse != nil {
        // handle response
    }
}
```

## DescribeVirtualGateways

<p>Lists the virtual private gateways owned by the Amazon Web Services account.</p> <p>You can create one or more Direct Connect private virtual interfaces linked to a virtual private gateway.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeVirtualGateways(ctx, operations.DescribeVirtualGatewaysRequest{
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.DescribeVirtualGatewaysXAmzTargetEnumOvertureServiceDescribeVirtualGateways,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VirtualGateways != nil {
        // handle response
    }
}
```

## DescribeVirtualInterfaces

<p>Displays all virtual interfaces for an Amazon Web Services account. Virtual interfaces deleted fewer than 15 minutes before you make the request are also returned. If you specify a connection ID, only the virtual interfaces associated with the connection are returned. If you specify a virtual interface ID, then only a single virtual interface is returned.</p> <p>A virtual interface (VLAN) transmits the traffic between the Direct Connect location and the customer network.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeVirtualInterfaces(ctx, operations.DescribeVirtualInterfacesRequest{
        DescribeVirtualInterfacesRequest: shared.DescribeVirtualInterfacesRequest{
            ConnectionID: sdk.String("aut"),
            VirtualInterfaceID: sdk.String("deleniti"),
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("inventore"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.DescribeVirtualInterfacesXAmzTargetEnumOvertureServiceDescribeVirtualInterfaces,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VirtualInterfaces != nil {
        // handle response
    }
}
```

## DisassociateConnectionFromLag

<p>Disassociates a connection from a link aggregation group (LAG). The connection is interrupted and re-established as a standalone connection (the connection is not deleted; to delete the connection, use the <a>DeleteConnection</a> request). If the LAG has associated virtual interfaces or hosted connections, they remain associated with the LAG. A disassociated connection owned by an Direct Connect Partner is automatically converted to an interconnect.</p> <p>If disassociating the connection would cause the LAG to fall below its setting for minimum number of operational connections, the request fails, except when it's the last member of the LAG. If all connections are disassociated, the LAG continues to exist as an empty LAG with no physical connections. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateConnectionFromLag(ctx, operations.DisassociateConnectionFromLagRequest{
        DisassociateConnectionFromLagRequest: shared.DisassociateConnectionFromLagRequest{
            ConnectionID: "dolorum",
            LagID: "laborum",
        },
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        XAmzTarget: operations.DisassociateConnectionFromLagXAmzTargetEnumOvertureServiceDisassociateConnectionFromLag,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```

## DisassociateMacSecKey

Removes the association between a MAC Security (MACsec) security key and an Direct Connect dedicated connection.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateMacSecKey(ctx, operations.DisassociateMacSecKeyRequest{
        DisassociateMacSecKeyRequest: shared.DisassociateMacSecKeyRequest{
            ConnectionID: "nulla",
            SecretARN: "voluptas",
        },
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.DisassociateMacSecKeyXAmzTargetEnumOvertureServiceDisassociateMacSecKey,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateMacSecKeyResponse != nil {
        // handle response
    }
}
```

## ListVirtualInterfaceTestHistory

Lists the virtual interface failover test history.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListVirtualInterfaceTestHistory(ctx, operations.ListVirtualInterfaceTestHistoryRequest{
        ListVirtualInterfaceTestHistoryRequest: shared.ListVirtualInterfaceTestHistoryRequest{
            BgpPeers: []string{
                "magnam",
                "odio",
            },
            MaxResults: sdk.Int64(262118),
            NextToken: sdk.String("esse"),
            Status: sdk.String("esse"),
            TestID: sdk.String("rem"),
            VirtualInterfaceID: sdk.String("fuga"),
        },
        XAmzAlgorithm: sdk.String("reprehenderit"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("fugiat"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        XAmzTarget: operations.ListVirtualInterfaceTestHistoryXAmzTargetEnumOvertureServiceListVirtualInterfaceTestHistory,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListVirtualInterfaceTestHistoryResponse != nil {
        // handle response
    }
}
```

## StartBgpFailoverTest

<p>Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages.</p> <p>You can run the test on public, private, transit, and hosted virtual interfaces.</p> <p>You can use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html">ListVirtualInterfaceTestHistory</a> to view the virtual interface test history.</p> <p>If you need to stop the test before the test interval completes, use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html">StopBgpFailoverTest</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartBgpFailoverTest(ctx, operations.StartBgpFailoverTestRequest{
        StartBgpFailoverTestRequest: shared.StartBgpFailoverTestRequest{
            BgpPeers: []string{
                "praesentium",
            },
            TestDurationInMinutes: sdk.Int64(788546),
            VirtualInterfaceID: "veritatis",
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.StartBgpFailoverTestXAmzTargetEnumOvertureServiceStartBgpFailoverTest,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartBgpFailoverTestResponse != nil {
        // handle response
    }
}
```

## StopBgpFailoverTest

Stops the virtual interface failover test.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StopBgpFailoverTest(ctx, operations.StopBgpFailoverTestRequest{
        StopBgpFailoverTestRequest: shared.StopBgpFailoverTestRequest{
            VirtualInterfaceID: "fuga",
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("consequatur"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.StopBgpFailoverTestXAmzTargetEnumOvertureServiceStopBgpFailoverTest,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopBgpFailoverTestResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Adds the specified tags to the specified Direct Connect resource. Each resource can have a maximum of 50 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the resource, this action updates its value.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceArn: "debitis",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "aspernatur",
                    Value: sdk.String("sequi"),
                },
                shared.Tag{
                    Key: "quo",
                    Value: sdk.String("esse"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumOvertureServiceTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes one or more tags from the specified Direct Connect resource.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceArn: "totam",
            TagKeys: []string{
                "aliquam",
                "odio",
                "occaecati",
                "commodi",
            },
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumOvertureServiceUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateConnection

<p>Updates the Direct Connect dedicated connection configuration.</p> <p>You can update the following parameters for a connection:</p> <ul> <li> <p>The connection name</p> </li> <li> <p>The connection's MAC Security (MACsec) encryption mode.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateConnection(ctx, operations.UpdateConnectionRequest{
        UpdateConnectionRequest: shared.UpdateConnectionRequest{
            ConnectionID: "quas",
            ConnectionName: sdk.String("praesentium"),
            EncryptionMode: sdk.String("consequuntur"),
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("fuga"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.UpdateConnectionXAmzTargetEnumOvertureServiceUpdateConnection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Connection != nil {
        // handle response
    }
}
```

## UpdateDirectConnectGateway

Updates the name of a current Direct Connect gateway.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDirectConnectGateway(ctx, operations.UpdateDirectConnectGatewayRequest{
        UpdateDirectConnectGatewayRequest: shared.UpdateDirectConnectGatewayRequest{
            DirectConnectGatewayID: "minima",
            NewDirectConnectGatewayName: "nisi",
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.UpdateDirectConnectGatewayXAmzTargetEnumOvertureServiceUpdateDirectConnectGateway,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDirectConnectGatewayResponse != nil {
        // handle response
    }
}
```

## UpdateDirectConnectGatewayAssociation

<p>Updates the specified attributes of the Direct Connect gateway association.</p> <p>Add or remove prefixes from the association.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateDirectConnectGatewayAssociation(ctx, operations.UpdateDirectConnectGatewayAssociationRequest{
        UpdateDirectConnectGatewayAssociationRequest: shared.UpdateDirectConnectGatewayAssociationRequest{
            AddAllowedPrefixesToDirectConnectGateway: []shared.RouteFilterPrefix{
                shared.RouteFilterPrefix{
                    Cidr: sdk.String("et"),
                },
                shared.RouteFilterPrefix{
                    Cidr: sdk.String("esse"),
                },
                shared.RouteFilterPrefix{
                    Cidr: sdk.String("eveniet"),
                },
            },
            AssociationID: sdk.String("accusamus"),
            RemoveAllowedPrefixesToDirectConnectGateway: []shared.RouteFilterPrefix{
                shared.RouteFilterPrefix{
                    Cidr: sdk.String("esse"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.UpdateDirectConnectGatewayAssociationXAmzTargetEnumOvertureServiceUpdateDirectConnectGatewayAssociation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDirectConnectGatewayAssociationResult != nil {
        // handle response
    }
}
```

## UpdateLag

<p>Updates the attributes of the specified link aggregation group (LAG).</p> <p>You can update the following LAG attributes:</p> <ul> <li> <p>The name of the LAG.</p> </li> <li> <p>The value for the minimum number of connections that must be operational for the LAG itself to be operational. </p> </li> <li> <p>The LAG's MACsec encryption mode.</p> <p>Amazon Web Services assigns this value to each connection which is part of the LAG.</p> </li> <li> <p>The tags</p> </li> </ul> <note> <p>If you adjust the threshold value for the minimum number of operational connections, ensure that the new value does not cause the LAG to fall below the threshold and become non-operational.</p> </note>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateLag(ctx, operations.UpdateLagRequest{
        UpdateLagRequest: shared.UpdateLagRequest{
            EncryptionMode: sdk.String("harum"),
            LagID: "molestiae",
            LagName: sdk.String("rerum"),
            MinimumLinks: sdk.Int64(580197),
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.UpdateLagXAmzTargetEnumOvertureServiceUpdateLag,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Lag != nil {
        // handle response
    }
}
```

## UpdateVirtualInterfaceAttributes

<p>Updates the specified attributes of the specified virtual private interface.</p> <p>Setting the MTU of a virtual interface to 9001 (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated to support jumbo frames. Updating the connection disrupts network connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To check whether your connection supports jumbo frames, call <a>DescribeConnections</a>. To check whether your virtual q interface supports jumbo frames, call <a>DescribeVirtualInterfaces</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateVirtualInterfaceAttributes(ctx, operations.UpdateVirtualInterfaceAttributesRequest{
        UpdateVirtualInterfaceAttributesRequest: shared.UpdateVirtualInterfaceAttributesRequest{
            EnableSiteLink: sdk.Bool(false),
            Mtu: sdk.Int64(766964),
            VirtualInterfaceID: "consequuntur",
            VirtualInterfaceName: sdk.String("consequatur"),
        },
        XAmzAlgorithm: sdk.String("minus"),
        XAmzContentSha256: sdk.String("quaerat"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.UpdateVirtualInterfaceAttributesXAmzTargetEnumOvertureServiceUpdateVirtualInterfaceAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VirtualInterface != nil {
        // handle response
    }
}
```
