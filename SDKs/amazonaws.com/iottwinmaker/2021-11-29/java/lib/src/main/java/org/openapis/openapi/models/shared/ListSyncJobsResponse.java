/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListSyncJobsResponse - Success
 */
public class ListSyncJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;

    public ListSyncJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncJobSummaries")
    public SyncJobSummary[] syncJobSummaries;

    public ListSyncJobsResponse withSyncJobSummaries(SyncJobSummary[] syncJobSummaries) {
        this.syncJobSummaries = syncJobSummaries;
        return this;
    }
    
    public ListSyncJobsResponse(){}
}
