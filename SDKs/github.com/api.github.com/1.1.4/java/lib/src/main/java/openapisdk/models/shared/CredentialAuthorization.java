package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * CredentialAuthorization
 * Credential Authorization
**/
public class CredentialAuthorization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorized_credential_id")
    public Long authorizedCredentialId;
    public CredentialAuthorization withAuthorizedCredentialId(Long authorizedCredentialId) {
        this.authorizedCredentialId = authorizedCredentialId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorized_credential_note")
    public String authorizedCredentialNote;
    public CredentialAuthorization withAuthorizedCredentialNote(String authorizedCredentialNote) {
        this.authorizedCredentialNote = authorizedCredentialNote;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorized_credential_title")
    public String authorizedCredentialTitle;
    public CredentialAuthorization withAuthorizedCredentialTitle(String authorizedCredentialTitle) {
        this.authorizedCredentialTitle = authorizedCredentialTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("credential_accessed_at")
    public OffsetDateTime credentialAccessedAt;
    public CredentialAuthorization withCredentialAccessedAt(OffsetDateTime credentialAccessedAt) {
        this.credentialAccessedAt = credentialAccessedAt;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("credential_authorized_at")
    public OffsetDateTime credentialAuthorizedAt;
    public CredentialAuthorization withCredentialAuthorizedAt(OffsetDateTime credentialAuthorizedAt) {
        this.credentialAuthorizedAt = credentialAuthorizedAt;
        return this;
    }
    @JsonProperty("credential_id")
    public Long credentialId;
    public CredentialAuthorization withCredentialId(Long credentialId) {
        this.credentialId = credentialId;
        return this;
    }
    @JsonProperty("credential_type")
    public String credentialType;
    public CredentialAuthorization withCredentialType(String credentialType) {
        this.credentialType = credentialType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprint")
    public String fingerprint;
    public CredentialAuthorization withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonProperty("login")
    public String login;
    public CredentialAuthorization withLogin(String login) {
        this.login = login;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopes")
    public String[] scopes;
    public CredentialAuthorization withScopes(String[] scopes) {
        this.scopes = scopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token_last_eight")
    public String tokenLastEight;
    public CredentialAuthorization withTokenLastEight(String tokenLastEight) {
        this.tokenLastEight = tokenLastEight;
        return this;
    }
}