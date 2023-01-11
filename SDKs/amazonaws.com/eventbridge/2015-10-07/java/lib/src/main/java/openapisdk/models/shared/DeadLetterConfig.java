package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeadLetterConfig
 * A <code>DeadLetterConfig</code> object that contains information about a dead-letter queue configuration.
**/
public class DeadLetterConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public DeadLetterConfig withArn(String arn) {
        this.arn = arn;
        return this;
    }
}