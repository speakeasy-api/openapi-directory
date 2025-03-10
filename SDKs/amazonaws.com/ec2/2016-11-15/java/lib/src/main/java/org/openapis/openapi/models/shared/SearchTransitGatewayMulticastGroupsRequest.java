/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SearchTransitGatewayMulticastGroupsRequest {
    
    public Boolean dryRun;

    public SearchTransitGatewayMulticastGroupsRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    
    
    public SearchTransitGatewayMulticastGroupsRequestFilters[] filters;

    public SearchTransitGatewayMulticastGroupsRequest withFilters(SearchTransitGatewayMulticastGroupsRequestFilters[] filters) {
        this.filters = filters;
        return this;
    }
    
    
    public Long maxResults;

    public SearchTransitGatewayMulticastGroupsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    
    public String nextToken;

    public SearchTransitGatewayMulticastGroupsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    
    public String transitGatewayMulticastDomainId;

    public SearchTransitGatewayMulticastGroupsRequest withTransitGatewayMulticastDomainId(String transitGatewayMulticastDomainId) {
        this.transitGatewayMulticastDomainId = transitGatewayMulticastDomainId;
        return this;
    }
    
    public SearchTransitGatewayMulticastGroupsRequest(@JsonProperty("TransitGatewayMulticastDomainId") String transitGatewayMulticastDomainId) {
        this.transitGatewayMulticastDomainId = transitGatewayMulticastDomainId;
  }
}
