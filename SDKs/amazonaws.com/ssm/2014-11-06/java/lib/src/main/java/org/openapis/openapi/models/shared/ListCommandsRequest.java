/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ListCommandsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CommandId")
    public String commandId;

    public ListCommandsRequest withCommandId(String commandId) {
        this.commandId = commandId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public CommandFilter[] filters;

    public ListCommandsRequest withFilters(CommandFilter[] filters) {
        this.filters = filters;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceId")
    public String instanceId;

    public ListCommandsRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;

    public ListCommandsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;

    public ListCommandsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    public ListCommandsRequest(){}
}
