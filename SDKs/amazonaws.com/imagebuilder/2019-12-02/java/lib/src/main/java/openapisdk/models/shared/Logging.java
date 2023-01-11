package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Logging
 * Logging configuration defines where Image Builder uploads your logs.
**/
public class Logging {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Logs")
    public S3Logs s3Logs;
    public Logging withS3Logs(S3Logs s3Logs) {
        this.s3Logs = s3Logs;
        return this;
    }
}