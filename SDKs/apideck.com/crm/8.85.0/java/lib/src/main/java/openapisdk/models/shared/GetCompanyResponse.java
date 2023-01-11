package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCompanyResponse {
    @JsonProperty("data")
    public Company data;
    public GetCompanyResponse withData(Company data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetCompanyResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetCompanyResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetCompanyResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetCompanyResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetCompanyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}