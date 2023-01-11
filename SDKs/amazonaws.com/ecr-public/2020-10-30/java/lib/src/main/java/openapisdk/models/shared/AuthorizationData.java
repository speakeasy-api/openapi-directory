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
 * AuthorizationData
 * An authorization token data object that corresponds to a public registry.
**/
public class AuthorizationData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizationToken")
    public String authorizationToken;
    public AuthorizationData withAuthorizationToken(String authorizationToken) {
        this.authorizationToken = authorizationToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expiresAt")
    public OffsetDateTime expiresAt;
    public AuthorizationData withExpiresAt(OffsetDateTime expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    }
}