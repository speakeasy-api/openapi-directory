/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class GetRelationalDatabaseEventsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("durationInMinutes")
    public Long durationInMinutes;

    public GetRelationalDatabaseEventsRequest withDurationInMinutes(Long durationInMinutes) {
        this.durationInMinutes = durationInMinutes;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;

    public GetRelationalDatabaseEventsRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    
    @JsonProperty("relationalDatabaseName")
    public String relationalDatabaseName;

    public GetRelationalDatabaseEventsRequest withRelationalDatabaseName(String relationalDatabaseName) {
        this.relationalDatabaseName = relationalDatabaseName;
        return this;
    }
    
    public GetRelationalDatabaseEventsRequest(@JsonProperty("relationalDatabaseName") String relationalDatabaseName) {
        this.relationalDatabaseName = relationalDatabaseName;
  }
}
