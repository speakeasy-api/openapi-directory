package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetOpportunityResponse {
    @JsonProperty("data")
    public Opportunity data;
    public GetOpportunityResponse withData(Opportunity data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetOpportunityResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetOpportunityResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetOpportunityResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetOpportunityResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetOpportunityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}