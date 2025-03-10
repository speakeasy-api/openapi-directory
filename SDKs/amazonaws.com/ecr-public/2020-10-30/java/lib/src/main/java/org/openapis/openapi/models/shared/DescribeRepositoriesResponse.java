/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DescribeRepositoriesResponse - Success
 */
public class DescribeRepositoriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;

    public DescribeRepositoriesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositories")
    public Repository[] repositories;

    public DescribeRepositoriesResponse withRepositories(Repository[] repositories) {
        this.repositories = repositories;
        return this;
    }
    
    public DescribeRepositoriesResponse(){}
}
