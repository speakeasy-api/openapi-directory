/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import java.net.http.HttpResponse;

public class OrgListPublicMembersResponse {
    
    public byte[] body;
    public OrgListPublicMembersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    
    
    public String contentType;
    public OrgListPublicMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;
    public OrgListPublicMembersResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;
    public OrgListPublicMembersResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * UserList
     */
    
    public org.openapis.openapi.models.shared.User[] users;
    public OrgListPublicMembersResponse withUsers(org.openapis.openapi.models.shared.User[] users) {
        this.users = users;
        return this;
    }
    
}
