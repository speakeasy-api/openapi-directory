package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLeadsResponse {
    @JsonProperty("data")
    public Lead[] data;
    public GetLeadsResponse withData(Lead[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Links links;
    public GetLeadsResponse withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public Meta meta;
    public GetLeadsResponse withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetLeadsResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetLeadsResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetLeadsResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetLeadsResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetLeadsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}