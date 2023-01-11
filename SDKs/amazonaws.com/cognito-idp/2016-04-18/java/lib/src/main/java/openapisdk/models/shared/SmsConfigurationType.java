package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SmsConfigurationType
 * The SMS configuration type that includes the settings the Cognito User Pool needs to call for the Amazon SNS service to send an SMS message from your account. The Cognito User Pool makes the request to the Amazon SNS Service by using an IAM role that you provide for your account.
**/
public class SmsConfigurationType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExternalId")
    public String externalId;
    public SmsConfigurationType withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonProperty("SnsCallerArn")
    public String snsCallerArn;
    public SmsConfigurationType withSnsCallerArn(String snsCallerArn) {
        this.snsCallerArn = snsCallerArn;
        return this;
    }
}