package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteStreamRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CurrentVersion")
    public String currentVersion;
    public DeleteStreamRequestBody withCurrentVersion(String currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    }
    @JsonProperty("StreamARN")
    public String streamARN;
    public DeleteStreamRequestBody withStreamArn(String streamARN) {
        this.streamARN = streamARN;
        return this;
    }
}