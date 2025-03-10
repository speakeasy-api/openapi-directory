/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PostContainersGroupsNameOrIdMaprouteResponse {
    /**
     * OK. The route that you specified was successfully mapped to the container group.
     */
    
    public org.openapis.openapi.models.shared.ContainersGroupsNameOrIdMaproutePostInfo containersGroupsNameOrIdMaproutePostInfo;

    public PostContainersGroupsNameOrIdMaprouteResponse withContainersGroupsNameOrIdMaproutePostInfo(org.openapis.openapi.models.shared.ContainersGroupsNameOrIdMaproutePostInfo containersGroupsNameOrIdMaproutePostInfo) {
        this.containersGroupsNameOrIdMaproutePostInfo = containersGroupsNameOrIdMaproutePostInfo;
        return this;
    }
    
    
    public String contentType;

    public PostContainersGroupsNameOrIdMaprouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public PostContainersGroupsNameOrIdMaprouteResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PostContainersGroupsNameOrIdMaprouteResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public PostContainersGroupsNameOrIdMaprouteResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
