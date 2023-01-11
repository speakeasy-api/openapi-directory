package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RedshiftRetryOptions
 * Configures retry behavior in case Kinesis Data Firehose is unable to deliver documents to Amazon Redshift.
**/
public class RedshiftRetryOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DurationInSeconds")
    public Long durationInSeconds;
    public RedshiftRetryOptions withDurationInSeconds(Long durationInSeconds) {
        this.durationInSeconds = durationInSeconds;
        return this;
    }
}