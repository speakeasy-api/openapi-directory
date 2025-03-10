/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetItineraryPriceMetricsResponse {
    
    public String contentType;

    public GetItineraryPriceMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * code    | title                                 
     * ------- | ------------------------------------- 
     * 477     | INVALID FORMAT
     * 572     | INVALID OPTION                            
     * 32171   | MANDATORY DATA MISSING 
     */
    
    public org.openapis.openapi.models.shared.Error400 error400;

    public GetItineraryPriceMetricsResponse withError400(org.openapis.openapi.models.shared.Error400 error400) {
        this.error400 = error400;
        return this;
    }
    
    /**
     * Internal Server Error
     */
    
    public org.openapis.openapi.models.shared.Error500 error500;

    public GetItineraryPriceMetricsResponse withError500(org.openapis.openapi.models.shared.Error500 error500) {
        this.error500 = error500;
        return this;
    }
    
    
    public Integer statusCode;

    public GetItineraryPriceMetricsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetItineraryPriceMetricsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Successful reply
     */
    
    public GetItineraryPriceMetrics200ApplicationVndAmadeusPlusJson getItineraryPriceMetrics200ApplicationVndAmadeusPlusJsonObject;

    public GetItineraryPriceMetricsResponse withGetItineraryPriceMetrics200ApplicationVndAmadeusPlusJsonObject(GetItineraryPriceMetrics200ApplicationVndAmadeusPlusJson getItineraryPriceMetrics200ApplicationVndAmadeusPlusJsonObject) {
        this.getItineraryPriceMetrics200ApplicationVndAmadeusPlusJsonObject = getItineraryPriceMetrics200ApplicationVndAmadeusPlusJsonObject;
        return this;
    }
    
    public GetItineraryPriceMetricsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
