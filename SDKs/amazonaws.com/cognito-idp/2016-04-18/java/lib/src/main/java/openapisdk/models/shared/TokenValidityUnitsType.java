package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TokenValidityUnitsType
 * The data type for TokenValidityUnits that specifics the time measurements for token validity.
**/
public class TokenValidityUnitsType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessToken")
    public TimeUnitsTypeEnum accessToken;
    public TokenValidityUnitsType withAccessToken(TimeUnitsTypeEnum accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdToken")
    public TimeUnitsTypeEnum idToken;
    public TokenValidityUnitsType withIdToken(TimeUnitsTypeEnum idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RefreshToken")
    public TimeUnitsTypeEnum refreshToken;
    public TokenValidityUnitsType withRefreshToken(TimeUnitsTypeEnum refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
}