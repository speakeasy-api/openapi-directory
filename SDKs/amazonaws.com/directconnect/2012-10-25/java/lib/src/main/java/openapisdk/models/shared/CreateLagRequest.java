package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLagRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childConnectionTags")
    public Tag[] childConnectionTags;
    public CreateLagRequest withChildConnectionTags(Tag[] childConnectionTags) {
        this.childConnectionTags = childConnectionTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionId")
    public String connectionId;
    public CreateLagRequest withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonProperty("connectionsBandwidth")
    public String connectionsBandwidth;
    public CreateLagRequest withConnectionsBandwidth(String connectionsBandwidth) {
        this.connectionsBandwidth = connectionsBandwidth;
        return this;
    }
    @JsonProperty("lagName")
    public String lagName;
    public CreateLagRequest withLagName(String lagName) {
        this.lagName = lagName;
        return this;
    }
    @JsonProperty("location")
    public String location;
    public CreateLagRequest withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonProperty("numberOfConnections")
    public Long numberOfConnections;
    public CreateLagRequest withNumberOfConnections(Long numberOfConnections) {
        this.numberOfConnections = numberOfConnections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerName")
    public String providerName;
    public CreateLagRequest withProviderName(String providerName) {
        this.providerName = providerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestMACSec")
    public Boolean requestMACSec;
    public CreateLagRequest withRequestMacSec(Boolean requestMACSec) {
        this.requestMACSec = requestMACSec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateLagRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}