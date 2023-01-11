package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetUploadSessionResponse {
    @JsonProperty("data")
    public UploadSession data;
    public GetUploadSessionResponse withData(UploadSession data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetUploadSessionResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetUploadSessionResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetUploadSessionResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetUploadSessionResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetUploadSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}