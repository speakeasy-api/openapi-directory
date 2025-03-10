/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * DescribeRouteTablesResult - Contains the output of DescribeRouteTables.
 */
public class DescribeRouteTablesResult {
    
    public String nextToken;

    public DescribeRouteTablesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    
    public DescribeRouteTablesResultRouteTables[] routeTables;

    public DescribeRouteTablesResult withRouteTables(DescribeRouteTablesResultRouteTables[] routeTables) {
        this.routeTables = routeTables;
        return this;
    }
    
    public DescribeRouteTablesResult(){}
}
