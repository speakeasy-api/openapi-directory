package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddNotificationChannelRequestBodyConfig
 *  Information about notification channels you have configured with DevOps Guru. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS).
**/
public class AddNotificationChannelRequestBodyConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sns")
    public openapisdk.models.shared.SnsChannelConfig sns;
    public AddNotificationChannelRequestBodyConfig withSns(openapisdk.models.shared.SnsChannelConfig sns) {
        this.sns = sns;
        return this;
    }
}