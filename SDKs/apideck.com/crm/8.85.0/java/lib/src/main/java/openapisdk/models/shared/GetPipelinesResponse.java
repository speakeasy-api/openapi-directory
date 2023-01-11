package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPipelinesResponse {
    @JsonProperty("data")
    public Pipeline[] data;
    public GetPipelinesResponse withData(Pipeline[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Links links;
    public GetPipelinesResponse withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public Meta meta;
    public GetPipelinesResponse withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("operation")
    public String operation;
    public GetPipelinesResponse withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonProperty("resource")
    public String resource;
    public GetPipelinesResponse withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public GetPipelinesResponse withService(String service) {
        this.service = service;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetPipelinesResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetPipelinesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}