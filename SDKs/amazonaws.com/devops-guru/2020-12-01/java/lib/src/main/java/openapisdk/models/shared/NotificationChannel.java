package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotificationChannel
 * <p> Information about a notification channel. A notification channel is used to notify you when DevOps Guru creates an insight. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic that is encrypted by an AWS Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for AWS KMS–encrypted Amazon SNS topics</a>.</p>
**/
public class NotificationChannel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Config")
    public NotificationChannelConfig config;
    public NotificationChannel withConfig(NotificationChannelConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public NotificationChannel withId(String id) {
        this.id = id;
        return this;
    }
}