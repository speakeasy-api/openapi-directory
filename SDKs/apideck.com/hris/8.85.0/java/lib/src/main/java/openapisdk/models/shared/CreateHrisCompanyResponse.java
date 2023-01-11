package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateHrisCompanyResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public CreateHrisCompanyResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public CreateHrisCompanyResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public CreateHrisCompanyResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public CreateHrisCompanyResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public CreateHrisCompanyResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public CreateHrisCompanyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}