/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CustomRoutingEndpointGroup - A complex type for the endpoint group for a custom routing accelerator. An Amazon Web Services Region can have only one endpoint group for a specific listener. 
 */
public class CustomRoutingEndpointGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationDescriptions")
    public CustomRoutingDestinationDescription[] destinationDescriptions;

    public CustomRoutingEndpointGroup withDestinationDescriptions(CustomRoutingDestinationDescription[] destinationDescriptions) {
        this.destinationDescriptions = destinationDescriptions;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointDescriptions")
    public CustomRoutingEndpointDescription[] endpointDescriptions;

    public CustomRoutingEndpointGroup withEndpointDescriptions(CustomRoutingEndpointDescription[] endpointDescriptions) {
        this.endpointDescriptions = endpointDescriptions;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointGroupArn")
    public String endpointGroupArn;

    public CustomRoutingEndpointGroup withEndpointGroupArn(String endpointGroupArn) {
        this.endpointGroupArn = endpointGroupArn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointGroupRegion")
    public String endpointGroupRegion;

    public CustomRoutingEndpointGroup withEndpointGroupRegion(String endpointGroupRegion) {
        this.endpointGroupRegion = endpointGroupRegion;
        return this;
    }
    
    public CustomRoutingEndpointGroup(){}
}
