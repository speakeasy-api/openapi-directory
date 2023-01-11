package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetFolderResponse {
    @JsonProperty("data")
    public Folder data;
    public GetFolderResponse withData(Folder data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetFolderResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetFolderResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetFolderResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetFolderResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetFolderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}