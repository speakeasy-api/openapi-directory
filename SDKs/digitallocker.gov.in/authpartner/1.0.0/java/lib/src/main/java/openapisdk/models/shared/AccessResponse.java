package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AccessResponse {
    @JsonProperty("access_token")
    public String accessToken;
    public AccessResponse withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonProperty("digilocker_id")
    public String digilockerId;
    public AccessResponse withDigilockerId(String digilockerId) {
        this.digilockerId = digilockerId;
        return this;
    }
    @JsonProperty("dob")
    public Long dob;
    public AccessResponse withDob(Long dob) {
        this.dob = dob;
        return this;
    }
    @JsonProperty("eaadhar")
    public AccessResponseEaadharEnum eaadhar;
    public AccessResponse withEaadhar(AccessResponseEaadharEnum eaadhar) {
        this.eaadhar = eaadhar;
        return this;
    }
    @JsonProperty("expires_in")
    public Long expiresIn;
    public AccessResponse withExpiresIn(Long expiresIn) {
        this.expiresIn = expiresIn;
        return this;
    }
    @JsonProperty("gender")
    public AccessResponseGenderEnum gender;
    public AccessResponse withGender(AccessResponseGenderEnum gender) {
        this.gender = gender;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AccessResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("reference_key")
    public String referenceKey;
    public AccessResponse withReferenceKey(String referenceKey) {
        this.referenceKey = referenceKey;
        return this;
    }
    @JsonProperty("refresh_token")
    public String refreshToken;
    public AccessResponse withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
    @JsonProperty("scope")
    public String scope;
    public AccessResponse withScope(String scope) {
        this.scope = scope;
        return this;
    }
    @JsonProperty("token_type")
    public String tokenType;
    public AccessResponse withTokenType(String tokenType) {
        this.tokenType = tokenType;
        return this;
    }
}