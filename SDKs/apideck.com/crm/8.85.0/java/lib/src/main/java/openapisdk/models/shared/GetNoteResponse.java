package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetNoteResponse {
    @JsonProperty("data")
    public Note data;
    public GetNoteResponse withData(Note data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetNoteResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetNoteResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetNoteResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetNoteResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetNoteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}