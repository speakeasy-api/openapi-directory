package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateConnectionRequest {
    @JsonProperty("bandwidth")
    public String bandwidth;
    public CreateConnectionRequest withBandwidth(String bandwidth) {
        this.bandwidth = bandwidth;
        return this;
    }
    @JsonProperty("connectionName")
    public String connectionName;
    public CreateConnectionRequest withConnectionName(String connectionName) {
        this.connectionName = connectionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lagId")
    public String lagId;
    public CreateConnectionRequest withLagId(String lagId) {
        this.lagId = lagId;
        return this;
    }
    @JsonProperty("location")
    public String location;
    public CreateConnectionRequest withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerName")
    public String providerName;
    public CreateConnectionRequest withProviderName(String providerName) {
        this.providerName = providerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMACSec")
    public Boolean requestMACSec;
    public CreateConnectionRequest withRequestMacSec(Boolean requestMACSec) {
        this.requestMACSec = requestMACSec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateConnectionRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}