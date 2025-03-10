/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListUserProfilesResponse - Success
 */
public class ListUserProfilesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;

    public ListUserProfilesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserProfiles")
    public UserProfileDetails[] userProfiles;

    public ListUserProfilesResponse withUserProfiles(UserProfileDetails[] userProfiles) {
        this.userProfiles = userProfiles;
        return this;
    }
    
    public ListUserProfilesResponse(){}
}
