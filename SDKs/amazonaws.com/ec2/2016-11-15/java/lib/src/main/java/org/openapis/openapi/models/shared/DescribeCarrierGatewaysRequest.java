/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



public class DescribeCarrierGatewaysRequest {
    
    public String[] carrierGatewayIds;

    public DescribeCarrierGatewaysRequest withCarrierGatewayIds(String[] carrierGatewayIds) {
        this.carrierGatewayIds = carrierGatewayIds;
        return this;
    }
    
    
    public Boolean dryRun;

    public DescribeCarrierGatewaysRequest withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    
    
    public DescribeCarrierGatewaysRequestFilters[] filters;

    public DescribeCarrierGatewaysRequest withFilters(DescribeCarrierGatewaysRequestFilters[] filters) {
        this.filters = filters;
        return this;
    }
    
    
    public Long maxResults;

    public DescribeCarrierGatewaysRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    
    public String nextToken;

    public DescribeCarrierGatewaysRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    public DescribeCarrierGatewaysRequest(){}
}
