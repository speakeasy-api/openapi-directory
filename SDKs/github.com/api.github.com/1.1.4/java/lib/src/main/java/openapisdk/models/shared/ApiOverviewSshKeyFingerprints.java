package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiOverviewSshKeyFingerprints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SHA256_DSA")
    public String sha256DSA;
    public ApiOverviewSshKeyFingerprints withSha256Dsa(String sha256DSA) {
        this.sha256DSA = sha256DSA;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SHA256_RSA")
    public String sha256RSA;
    public ApiOverviewSshKeyFingerprints withSha256Rsa(String sha256RSA) {
        this.sha256RSA = sha256RSA;
        return this;
    }
}