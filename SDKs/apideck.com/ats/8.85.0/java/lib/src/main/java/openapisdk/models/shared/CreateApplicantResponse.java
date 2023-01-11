package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateApplicantResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public CreateApplicantResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public CreateApplicantResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public CreateApplicantResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public CreateApplicantResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public CreateApplicantResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public CreateApplicantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}