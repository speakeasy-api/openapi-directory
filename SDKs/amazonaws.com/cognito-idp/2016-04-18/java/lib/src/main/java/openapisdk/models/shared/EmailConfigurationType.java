package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmailConfigurationType
 * <p>The email configuration type. </p> <note> <p>Amazon Cognito has specific regions for use with Amazon SES. For more information on the supported regions, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html">Email Settings for Amazon Cognito User Pools</a>.</p> </note>
**/
public class EmailConfigurationType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConfigurationSet")
    public String configurationSet;
    public EmailConfigurationType withConfigurationSet(String configurationSet) {
        this.configurationSet = configurationSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailSendingAccount")
    public EmailSendingAccountTypeEnum emailSendingAccount;
    public EmailConfigurationType withEmailSendingAccount(EmailSendingAccountTypeEnum emailSendingAccount) {
        this.emailSendingAccount = emailSendingAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("From")
    public String from;
    public EmailConfigurationType withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplyToEmailAddress")
    public String replyToEmailAddress;
    public EmailConfigurationType withReplyToEmailAddress(String replyToEmailAddress) {
        this.replyToEmailAddress = replyToEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceArn")
    public String sourceArn;
    public EmailConfigurationType withSourceArn(String sourceArn) {
        this.sourceArn = sourceArn;
        return this;
    }
}