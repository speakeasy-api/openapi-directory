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
 * AuthorizerDescription
 * The authorizer description.
**/
public class AuthorizerDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerArn")
    public String authorizerArn;
    public AuthorizerDescription withAuthorizerArn(String authorizerArn) {
        this.authorizerArn = authorizerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerFunctionArn")
    public String authorizerFunctionArn;
    public AuthorizerDescription withAuthorizerFunctionArn(String authorizerFunctionArn) {
        this.authorizerFunctionArn = authorizerFunctionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerName")
    public String authorizerName;
    public AuthorizerDescription withAuthorizerName(String authorizerName) {
        this.authorizerName = authorizerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public AuthorizerDescription withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastModifiedDate")
    public OffsetDateTime lastModifiedDate;
    public AuthorizerDescription withLastModifiedDate(OffsetDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signingDisabled")
    public Boolean signingDisabled;
    public AuthorizerDescription withSigningDisabled(Boolean signingDisabled) {
        this.signingDisabled = signingDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public AuthorizerStatusEnum status;
    public AuthorizerDescription withStatus(AuthorizerStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenKeyName")
    public String tokenKeyName;
    public AuthorizerDescription withTokenKeyName(String tokenKeyName) {
        this.tokenKeyName = tokenKeyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenSigningPublicKeys")
    public java.util.Map<String, String> tokenSigningPublicKeys;
    public AuthorizerDescription withTokenSigningPublicKeys(java.util.Map<String, String> tokenSigningPublicKeys) {
        this.tokenSigningPublicKeys = tokenSigningPublicKeys;
        return this;
    }
}