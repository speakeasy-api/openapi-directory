/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListApplicationsResponse - Success
 */
public class ListApplicationsResponse {
    @JsonProperty("applications")
    public ApplicationSummary[] applications;

    public ListApplicationsResponse withApplications(ApplicationSummary[] applications) {
        this.applications = applications;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;

    public ListApplicationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    public ListApplicationsResponse(@JsonProperty("applications") ApplicationSummary[] applications) {
        this.applications = applications;
  }
}
