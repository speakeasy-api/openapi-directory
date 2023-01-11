package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetPropertyTimestamp
 * An asset property timestamp entry containing the following information.
**/
public class AssetPropertyTimestamp {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offsetInNanos")
    public String offsetInNanos;
    public AssetPropertyTimestamp withOffsetInNanos(String offsetInNanos) {
        this.offsetInNanos = offsetInNanos;
        return this;
    }
    @JsonProperty("timeInSeconds")
    public String timeInSeconds;
    public AssetPropertyTimestamp withTimeInSeconds(String timeInSeconds) {
        this.timeInSeconds = timeInSeconds;
        return this;
    }
}