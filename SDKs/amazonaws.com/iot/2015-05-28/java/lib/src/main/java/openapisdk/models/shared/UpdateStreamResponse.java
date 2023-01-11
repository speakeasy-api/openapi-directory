package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateStreamResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateStreamResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamArn")
    public String streamArn;
    public UpdateStreamResponse withStreamArn(String streamArn) {
        this.streamArn = streamArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamId")
    public String streamId;
    public UpdateStreamResponse withStreamId(String streamId) {
        this.streamId = streamId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamVersion")
    public Long streamVersion;
    public UpdateStreamResponse withStreamVersion(Long streamVersion) {
        this.streamVersion = streamVersion;
        return this;
    }
}