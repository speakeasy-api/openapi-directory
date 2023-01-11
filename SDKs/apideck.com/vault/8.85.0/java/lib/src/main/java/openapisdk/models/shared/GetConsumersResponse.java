package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetConsumersResponse {
    @JsonProperty("data")
    public GetConsumersResponseData[] data;
    public GetConsumersResponse withData(GetConsumersResponseData[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Links links;
    public GetConsumersResponse withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public Meta meta;
    public GetConsumersResponse withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetConsumersResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetConsumersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}