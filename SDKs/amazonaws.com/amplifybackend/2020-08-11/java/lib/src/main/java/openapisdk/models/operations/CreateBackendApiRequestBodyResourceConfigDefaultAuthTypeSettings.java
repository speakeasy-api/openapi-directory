package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings
 * Describes settings for the authentication mode.
**/
public class CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CognitoUserPoolId")
    public java.util.Map<String, Object> cognitoUserPoolId;
    public CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings withCognitoUserPoolId(java.util.Map<String, Object> cognitoUserPoolId) {
        this.cognitoUserPoolId = cognitoUserPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public java.util.Map<String, Object> description;
    public CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpirationTime")
    public java.util.Map<String, Object> expirationTime;
    public CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings withExpirationTime(java.util.Map<String, Object> expirationTime) {
        this.expirationTime = expirationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpenIDAuthTTL")
    public java.util.Map<String, Object> openIDAuthTTL;
    public CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings withOpenIdAuthTtl(java.util.Map<String, Object> openIDAuthTTL) {
        this.openIDAuthTTL = openIDAuthTTL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpenIDClientId")
    public java.util.Map<String, Object> openIDClientID;
    public CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings withOpenIdClientId(java.util.Map<String, Object> openIDClientID) {
        this.openIDClientID = openIDClientID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpenIDIatTTL")
    public java.util.Map<String, Object> openIDIatTTL;
    public CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings withOpenIdIatTtl(java.util.Map<String, Object> openIDIatTTL) {
        this.openIDIatTTL = openIDIatTTL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpenIDIssueURL")
    public java.util.Map<String, Object> openIDIssueURL;
    public CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings withOpenIdIssueUrl(java.util.Map<String, Object> openIDIssueURL) {
        this.openIDIssueURL = openIDIssueURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpenIDProviderName")
    public java.util.Map<String, Object> openIDProviderName;
    public CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings withOpenIdProviderName(java.util.Map<String, Object> openIDProviderName) {
        this.openIDProviderName = openIDProviderName;
        return this;
    }
}