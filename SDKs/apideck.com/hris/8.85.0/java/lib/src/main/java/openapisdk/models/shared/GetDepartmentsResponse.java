package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDepartmentsResponse {
    @JsonProperty("data")
    public Department[] data;
    public GetDepartmentsResponse withData(Department[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Links links;
    public GetDepartmentsResponse withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public Meta meta;
    public GetDepartmentsResponse withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetDepartmentsResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetDepartmentsResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetDepartmentsResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetDepartmentsResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetDepartmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}