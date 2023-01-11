package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetUserResponseOutput {
    @JsonProperty("data")
    public UserOutput data;
    public GetUserResponseOutput withData(UserOutput data) {
        this.data = data;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetUserResponseOutput withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetUserResponseOutput withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetUserResponseOutput withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetUserResponseOutput withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetUserResponseOutput withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}