/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RouteResponse - Represents a route response.
 */
public class RouteResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelSelectionExpression")
    public String modelSelectionExpression;

    public RouteResponse withModelSelectionExpression(String modelSelectionExpression) {
        this.modelSelectionExpression = modelSelectionExpression;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResponseModels")
    public java.util.Map<String, String> responseModels;

    public RouteResponse withResponseModels(java.util.Map<String, String> responseModels) {
        this.responseModels = responseModels;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResponseParameters")
    public java.util.Map<String, ParameterConstraints> responseParameters;

    public RouteResponse withResponseParameters(java.util.Map<String, ParameterConstraints> responseParameters) {
        this.responseParameters = responseParameters;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RouteResponseId")
    public String routeResponseId;

    public RouteResponse withRouteResponseId(String routeResponseId) {
        this.routeResponseId = routeResponseId;
        return this;
    }
    
    @JsonProperty("RouteResponseKey")
    public String routeResponseKey;

    public RouteResponse withRouteResponseKey(String routeResponseKey) {
        this.routeResponseKey = routeResponseKey;
        return this;
    }
    
    public RouteResponse(@JsonProperty("RouteResponseKey") String routeResponseKey) {
        this.routeResponseKey = routeResponseKey;
  }
}
