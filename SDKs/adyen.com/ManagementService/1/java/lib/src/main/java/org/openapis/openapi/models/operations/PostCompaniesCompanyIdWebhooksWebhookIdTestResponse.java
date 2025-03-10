/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PostCompaniesCompanyIdWebhooksWebhookIdTestResponse {
    
    public String contentType;

    public PostCompaniesCompanyIdWebhooksWebhookIdTestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public PostCompaniesCompanyIdWebhooksWebhookIdTestResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PostCompaniesCompanyIdWebhooksWebhookIdTestResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Bad Request - a problem reading or understanding the request.
     */
    
    public org.openapis.openapi.models.shared.RestServiceError restServiceError;

    public PostCompaniesCompanyIdWebhooksWebhookIdTestResponse withRestServiceError(org.openapis.openapi.models.shared.RestServiceError restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    
    /**
     * OK - the request has succeeded.
     */
    
    public org.openapis.openapi.models.shared.TestWebhookResponse testWebhookResponse;

    public PostCompaniesCompanyIdWebhooksWebhookIdTestResponse withTestWebhookResponse(org.openapis.openapi.models.shared.TestWebhookResponse testWebhookResponse) {
        this.testWebhookResponse = testWebhookResponse;
        return this;
    }
    
    public PostCompaniesCompanyIdWebhooksWebhookIdTestResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
