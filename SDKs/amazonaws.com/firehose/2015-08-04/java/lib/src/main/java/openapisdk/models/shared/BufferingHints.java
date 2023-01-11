package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BufferingHints
 * Describes hints for the buffering to perform before delivering data to the destination. These options are treated as hints, and therefore Kinesis Data Firehose might choose to use different values when it is optimal. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other.
**/
public class BufferingHints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntervalInSeconds")
    public Long intervalInSeconds;
    public BufferingHints withIntervalInSeconds(Long intervalInSeconds) {
        this.intervalInSeconds = intervalInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SizeInMBs")
    public Long sizeInMBs;
    public BufferingHints withSizeInMBs(Long sizeInMBs) {
        this.sizeInMBs = sizeInMBs;
        return this;
    }
}