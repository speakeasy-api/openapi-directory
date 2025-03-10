/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class EnterpriseAdminGetAllStatsResponse {
    
    public String contentType;

    public EnterpriseAdminGetAllStatsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public EnterpriseAdminGetAllStatsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public EnterpriseAdminGetAllStatsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.EnterpriseOverview enterpriseOverview;

    public EnterpriseAdminGetAllStatsResponse withEnterpriseOverview(org.openapis.openapi.models.shared.EnterpriseOverview enterpriseOverview) {
        this.enterpriseOverview = enterpriseOverview;
        return this;
    }
    
    public EnterpriseAdminGetAllStatsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
