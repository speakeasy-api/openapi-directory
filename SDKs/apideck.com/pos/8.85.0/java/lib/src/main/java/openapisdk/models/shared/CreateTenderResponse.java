package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateTenderResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public CreateTenderResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public CreateTenderResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public CreateTenderResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public CreateTenderResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public CreateTenderResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public CreateTenderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}