package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetApplicantResponse {
    @JsonProperty("data")
    public Applicant data;
    public GetApplicantResponse withData(Applicant data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetApplicantResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetApplicantResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetApplicantResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetApplicantResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetApplicantResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}