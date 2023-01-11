package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsApiGatewayAccessLogSettings
 * Contains information about settings for logging access for the stage.
**/
public class AwsApiGatewayAccessLogSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationArn")
    public String destinationArn;
    public AwsApiGatewayAccessLogSettings withDestinationArn(String destinationArn) {
        this.destinationArn = destinationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Format")
    public String format;
    public AwsApiGatewayAccessLogSettings withFormat(String format) {
        this.format = format;
        return this;
    }
}