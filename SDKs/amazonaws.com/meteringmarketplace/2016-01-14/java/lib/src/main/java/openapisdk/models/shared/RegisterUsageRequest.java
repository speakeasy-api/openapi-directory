package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterUsageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Nonce")
    public String nonce;
    public RegisterUsageRequest withNonce(String nonce) {
        this.nonce = nonce;
        return this;
    }
    @JsonProperty("ProductCode")
    public String productCode;
    public RegisterUsageRequest withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonProperty("PublicKeyVersion")
    public Long publicKeyVersion;
    public RegisterUsageRequest withPublicKeyVersion(Long publicKeyVersion) {
        this.publicKeyVersion = publicKeyVersion;
        return this;
    }
}