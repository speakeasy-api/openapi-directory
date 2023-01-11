package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteCompanyResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public DeleteCompanyResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public DeleteCompanyResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public DeleteCompanyResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public DeleteCompanyResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public DeleteCompanyResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public DeleteCompanyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}