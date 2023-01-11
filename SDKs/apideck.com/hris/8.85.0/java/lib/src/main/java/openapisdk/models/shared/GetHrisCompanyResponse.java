package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetHrisCompanyResponse {
    @JsonProperty("data")
    public HrisCompany data;
    public GetHrisCompanyResponse withData(HrisCompany data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetHrisCompanyResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetHrisCompanyResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetHrisCompanyResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetHrisCompanyResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetHrisCompanyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}