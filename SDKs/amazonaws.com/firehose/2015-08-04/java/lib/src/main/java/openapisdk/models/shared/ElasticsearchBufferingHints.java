package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ElasticsearchBufferingHints
 * Describes the buffering to perform before delivering data to the Amazon ES destination.
**/
public class ElasticsearchBufferingHints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntervalInSeconds")
    public Long intervalInSeconds;
    public ElasticsearchBufferingHints withIntervalInSeconds(Long intervalInSeconds) {
        this.intervalInSeconds = intervalInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SizeInMBs")
    public Long sizeInMBs;
    public ElasticsearchBufferingHints withSizeInMBs(Long sizeInMBs) {
        this.sizeInMBs = sizeInMBs;
        return this;
    }
}