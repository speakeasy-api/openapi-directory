/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetUsersUserIdGroupsResponse {
    
    public String contentType;

    public GetUsersUserIdGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * A list of GroupUsers objects.
     */
    
    public org.openapis.openapi.models.shared.GroupUserEntity[] groupUserEntities;

    public GetUsersUserIdGroupsResponse withGroupUserEntities(org.openapis.openapi.models.shared.GroupUserEntity[] groupUserEntities) {
        this.groupUserEntities = groupUserEntities;
        return this;
    }
    
    
    public Integer statusCode;

    public GetUsersUserIdGroupsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetUsersUserIdGroupsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetUsersUserIdGroupsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
