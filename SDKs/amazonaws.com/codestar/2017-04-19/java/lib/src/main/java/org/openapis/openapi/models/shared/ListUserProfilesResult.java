/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListUserProfilesResult - Success
 */
public class ListUserProfilesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;

    public ListUserProfilesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    @JsonProperty("userProfiles")
    public UserProfileSummary[] userProfiles;

    public ListUserProfilesResult withUserProfiles(UserProfileSummary[] userProfiles) {
        this.userProfiles = userProfiles;
        return this;
    }
    
    public ListUserProfilesResult(@JsonProperty("userProfiles") UserProfileSummary[] userProfiles) {
        this.userProfiles = userProfiles;
  }
}
