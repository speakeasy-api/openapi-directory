package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings
 * Describes settings for the authentication mode.
**/
public class UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CognitoUserPoolId")
    public java.util.Map<String, Object> cognitoUserPoolId;
    public UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings withCognitoUserPoolId(java.util.Map<String, Object> cognitoUserPoolId) {
        this.cognitoUserPoolId = cognitoUserPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public java.util.Map<String, Object> description;
    public UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpirationTime")
    public java.util.Map<String, Object> expirationTime;
    public UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings withExpirationTime(java.util.Map<String, Object> expirationTime) {
        this.expirationTime = expirationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpenIDAuthTTL")
    public java.util.Map<String, Object> openIDAuthTTL;
    public UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings withOpenIdAuthTtl(java.util.Map<String, Object> openIDAuthTTL) {
        this.openIDAuthTTL = openIDAuthTTL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpenIDClientId")
    public java.util.Map<String, Object> openIDClientID;
    public UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings withOpenIdClientId(java.util.Map<String, Object> openIDClientID) {
        this.openIDClientID = openIDClientID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpenIDIatTTL")
    public java.util.Map<String, Object> openIDIatTTL;
    public UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings withOpenIdIatTtl(java.util.Map<String, Object> openIDIatTTL) {
        this.openIDIatTTL = openIDIatTTL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpenIDIssueURL")
    public java.util.Map<String, Object> openIDIssueURL;
    public UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings withOpenIdIssueUrl(java.util.Map<String, Object> openIDIssueURL) {
        this.openIDIssueURL = openIDIssueURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpenIDProviderName")
    public java.util.Map<String, Object> openIDProviderName;
    public UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings withOpenIdProviderName(java.util.Map<String, Object> openIDProviderName) {
        this.openIDProviderName = openIDProviderName;
        return this;
    }
}