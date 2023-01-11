package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateUserPoolRequest
 * Represents the request to update the user pool.
**/
public class UpdateUserPoolRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountRecoverySetting")
    public AccountRecoverySettingType accountRecoverySetting;
    public UpdateUserPoolRequest withAccountRecoverySetting(AccountRecoverySettingType accountRecoverySetting) {
        this.accountRecoverySetting = accountRecoverySetting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdminCreateUserConfig")
    public AdminCreateUserConfigType adminCreateUserConfig;
    public UpdateUserPoolRequest withAdminCreateUserConfig(AdminCreateUserConfigType adminCreateUserConfig) {
        this.adminCreateUserConfig = adminCreateUserConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoVerifiedAttributes")
    public VerifiedAttributeTypeEnum[] autoVerifiedAttributes;
    public UpdateUserPoolRequest withAutoVerifiedAttributes(VerifiedAttributeTypeEnum[] autoVerifiedAttributes) {
        this.autoVerifiedAttributes = autoVerifiedAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceConfiguration")
    public DeviceConfigurationType deviceConfiguration;
    public UpdateUserPoolRequest withDeviceConfiguration(DeviceConfigurationType deviceConfiguration) {
        this.deviceConfiguration = deviceConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailConfiguration")
    public EmailConfigurationType emailConfiguration;
    public UpdateUserPoolRequest withEmailConfiguration(EmailConfigurationType emailConfiguration) {
        this.emailConfiguration = emailConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailVerificationMessage")
    public String emailVerificationMessage;
    public UpdateUserPoolRequest withEmailVerificationMessage(String emailVerificationMessage) {
        this.emailVerificationMessage = emailVerificationMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailVerificationSubject")
    public String emailVerificationSubject;
    public UpdateUserPoolRequest withEmailVerificationSubject(String emailVerificationSubject) {
        this.emailVerificationSubject = emailVerificationSubject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LambdaConfig")
    public LambdaConfigType lambdaConfig;
    public UpdateUserPoolRequest withLambdaConfig(LambdaConfigType lambdaConfig) {
        this.lambdaConfig = lambdaConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MfaConfiguration")
    public UserPoolMfaTypeEnum mfaConfiguration;
    public UpdateUserPoolRequest withMfaConfiguration(UserPoolMfaTypeEnum mfaConfiguration) {
        this.mfaConfiguration = mfaConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Policies")
    public UserPoolPolicyType policies;
    public UpdateUserPoolRequest withPolicies(UserPoolPolicyType policies) {
        this.policies = policies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SmsAuthenticationMessage")
    public String smsAuthenticationMessage;
    public UpdateUserPoolRequest withSmsAuthenticationMessage(String smsAuthenticationMessage) {
        this.smsAuthenticationMessage = smsAuthenticationMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SmsConfiguration")
    public SmsConfigurationType smsConfiguration;
    public UpdateUserPoolRequest withSmsConfiguration(SmsConfigurationType smsConfiguration) {
        this.smsConfiguration = smsConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SmsVerificationMessage")
    public String smsVerificationMessage;
    public UpdateUserPoolRequest withSmsVerificationMessage(String smsVerificationMessage) {
        this.smsVerificationMessage = smsVerificationMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPoolAddOns")
    public UserPoolAddOnsType userPoolAddOns;
    public UpdateUserPoolRequest withUserPoolAddOns(UserPoolAddOnsType userPoolAddOns) {
        this.userPoolAddOns = userPoolAddOns;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public UpdateUserPoolRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserPoolTags")
    public java.util.Map<String, String> userPoolTags;
    public UpdateUserPoolRequest withUserPoolTags(java.util.Map<String, String> userPoolTags) {
        this.userPoolTags = userPoolTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VerificationMessageTemplate")
    public VerificationMessageTemplateType verificationMessageTemplate;
    public UpdateUserPoolRequest withVerificationMessageTemplate(VerificationMessageTemplateType verificationMessageTemplate) {
        this.verificationMessageTemplate = verificationMessageTemplate;
        return this;
    }
}