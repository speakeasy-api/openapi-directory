package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ConnectionImportDataCredentials {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_token")
    public String accessToken;
    public ConnectionImportDataCredentials withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires_in")
    public Long expiresIn;
    public ConnectionImportDataCredentials withExpiresIn(Long expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("issued_at")
    public OffsetDateTime issuedAt;
    public ConnectionImportDataCredentials withIssuedAt(OffsetDateTime issuedAt) {
        this.issuedAt = issuedAt;
        return this;
    }
    @JsonProperty("refresh_token")
    public String refreshToken;
    public ConnectionImportDataCredentials withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
}