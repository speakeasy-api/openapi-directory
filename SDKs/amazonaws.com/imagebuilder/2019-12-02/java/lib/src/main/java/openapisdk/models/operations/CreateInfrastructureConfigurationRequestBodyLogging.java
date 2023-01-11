package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateInfrastructureConfigurationRequestBodyLogging
 * Logging configuration defines where Image Builder uploads your logs.
**/
public class CreateInfrastructureConfigurationRequestBodyLogging {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Logs")
    public openapisdk.models.shared.S3Logs s3Logs;
    public CreateInfrastructureConfigurationRequestBodyLogging withS3Logs(openapisdk.models.shared.S3Logs s3Logs) {
        this.s3Logs = s3Logs;
        return this;
    }
}