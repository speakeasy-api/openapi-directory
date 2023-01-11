package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdminCreateUserRequest
 * Represents the request to create a user in the specified user pool.
**/
public class AdminCreateUserRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientMetadata")
    public java.util.Map<String, String> clientMetadata;
    public AdminCreateUserRequest withClientMetadata(java.util.Map<String, String> clientMetadata) {
        this.clientMetadata = clientMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DesiredDeliveryMediums")
    public DeliveryMediumTypeEnum[] desiredDeliveryMediums;
    public AdminCreateUserRequest withDesiredDeliveryMediums(DeliveryMediumTypeEnum[] desiredDeliveryMediums) {
        this.desiredDeliveryMediums = desiredDeliveryMediums;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForceAliasCreation")
    public Boolean forceAliasCreation;
    public AdminCreateUserRequest withForceAliasCreation(Boolean forceAliasCreation) {
        this.forceAliasCreation = forceAliasCreation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageAction")
    public MessageActionTypeEnum messageAction;
    public AdminCreateUserRequest withMessageAction(MessageActionTypeEnum messageAction) {
        this.messageAction = messageAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemporaryPassword")
    public String temporaryPassword;
    public AdminCreateUserRequest withTemporaryPassword(String temporaryPassword) {
        this.temporaryPassword = temporaryPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserAttributes")
    public AttributeType[] userAttributes;
    public AdminCreateUserRequest withUserAttributes(AttributeType[] userAttributes) {
        this.userAttributes = userAttributes;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public AdminCreateUserRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public AdminCreateUserRequest withUsername(String username) {
        this.username = username;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationData")
    public AttributeType[] validationData;
    public AdminCreateUserRequest withValidationData(AttributeType[] validationData) {
        this.validationData = validationData;
        return this;
    }
}