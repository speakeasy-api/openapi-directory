/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ShipmentShipWithLabelJsonResponse {
    
    public byte[] body;

    public ShipmentShipWithLabelJsonResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    
    
    public String contentType;

    public ShipmentShipWithLabelJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiShipmentWithLabelResult rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiShipmentWithLabelResult;

    public ShipmentShipWithLabelJsonResponse withRechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiShipmentWithLabelResult(org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiShipmentWithLabelResult rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiShipmentWithLabelResult) {
        this.rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiShipmentWithLabelResult = rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiShipmentWithLabelResult;
        return this;
    }
    
    
    public Integer statusCode;

    public ShipmentShipWithLabelJsonResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ShipmentShipWithLabelJsonResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ShipmentShipWithLabelJsonResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
