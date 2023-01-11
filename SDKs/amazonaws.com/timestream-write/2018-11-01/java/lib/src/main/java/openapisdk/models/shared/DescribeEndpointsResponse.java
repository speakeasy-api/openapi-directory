package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeEndpointsResponse {
    @JsonProperty("Endpoints")
    public Endpoint[] endpoints;
    public DescribeEndpointsResponse withEndpoints(Endpoint[] endpoints) {
        this.endpoints = endpoints;
        return this;
    }
}