package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLogsResponse {
    @JsonProperty("data")
    public Log[] data;
    public GetLogsResponse withData(Log[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Links links;
    public GetLogsResponse withLinks(Links links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public Meta meta;
    public GetLogsResponse withMeta(Meta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetLogsResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetLogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}