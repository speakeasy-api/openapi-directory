package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateNoteResponse {
    @JsonProperty("data")
    public UnifiedId data;
    public CreateNoteResponse withData(UnifiedId data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public CreateNoteResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public CreateNoteResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public CreateNoteResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public CreateNoteResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public CreateNoteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}