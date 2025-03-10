/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatement - The packet header statement.
 */
public class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatement {
    
    public String[] destinationAddresses;

    public GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatement withDestinationAddresses(String[] destinationAddresses) {
        this.destinationAddresses = destinationAddresses;
        return this;
    }
    
    
    public String[] destinationPorts;

    public GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatement withDestinationPorts(String[] destinationPorts) {
        this.destinationPorts = destinationPorts;
        return this;
    }
    
    
    public String[] destinationPrefixLists;

    public GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatement withDestinationPrefixLists(String[] destinationPrefixLists) {
        this.destinationPrefixLists = destinationPrefixLists;
        return this;
    }
    
    
    public GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatementProtocolsEnum[] protocols;

    public GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatement withProtocols(GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatementProtocolsEnum[] protocols) {
        this.protocols = protocols;
        return this;
    }
    
    
    public String[] sourceAddresses;

    public GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatement withSourceAddresses(String[] sourceAddresses) {
        this.sourceAddresses = sourceAddresses;
        return this;
    }
    
    
    public String[] sourcePorts;

    public GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatement withSourcePorts(String[] sourcePorts) {
        this.sourcePorts = sourcePorts;
        return this;
    }
    
    
    public String[] sourcePrefixLists;

    public GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatement withSourcePrefixLists(String[] sourcePrefixLists) {
        this.sourcePrefixLists = sourcePrefixLists;
        return this;
    }
    
    public GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatement(){}
}
