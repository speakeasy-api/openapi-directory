package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetTenderResponse {
    @JsonProperty("data")
    public Tender data;
    public GetTenderResponse withData(Tender data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetTenderResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetTenderResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetTenderResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetTenderResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetTenderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}