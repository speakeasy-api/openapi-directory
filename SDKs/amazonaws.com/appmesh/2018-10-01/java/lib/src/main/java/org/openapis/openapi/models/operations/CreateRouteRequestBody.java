/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateRouteRequestBody {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the
     * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;

    public CreateRouteRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    
    /**
     * The name to use for the route.
     */
    @JsonProperty("routeName")
    public String routeName;

    public CreateRouteRequestBody withRouteName(String routeName) {
        this.routeName = routeName;
        return this;
    }
    
    /**
     * An object representing the specification of a route.
     */
    @JsonProperty("spec")
    public CreateRouteRequestBodySpec spec;

    public CreateRouteRequestBody withSpec(CreateRouteRequestBodySpec spec) {
        this.spec = spec;
        return this;
    }
    
    public CreateRouteRequestBody(@JsonProperty("routeName") String routeName, @JsonProperty("spec") CreateRouteRequestBodySpec spec) {
        this.routeName = routeName;
        this.spec = spec;
  }
}
