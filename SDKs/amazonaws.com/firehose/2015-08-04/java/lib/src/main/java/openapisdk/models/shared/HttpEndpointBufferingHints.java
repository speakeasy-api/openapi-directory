package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpEndpointBufferingHints
 * Describes the buffering options that can be applied before data is delivered to the HTTP endpoint destination. Kinesis Data Firehose treats these options as hints, and it might choose to use more optimal values. The <code>SizeInMBs</code> and <code>IntervalInSeconds</code> parameters are optional. However, if specify a value for one of them, you must also provide a value for the other. 
**/
public class HttpEndpointBufferingHints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntervalInSeconds")
    public Long intervalInSeconds;
    public HttpEndpointBufferingHints withIntervalInSeconds(Long intervalInSeconds) {
        this.intervalInSeconds = intervalInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SizeInMBs")
    public Long sizeInMBs;
    public HttpEndpointBufferingHints withSizeInMBs(Long sizeInMBs) {
        this.sizeInMBs = sizeInMBs;
        return this;
    }
}