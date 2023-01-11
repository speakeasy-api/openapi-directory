package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DownloadDefaultKeyPairResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateKeyBase64")
    public String privateKeyBase64;
    public DownloadDefaultKeyPairResult withPrivateKeyBase64(String privateKeyBase64) {
        this.privateKeyBase64 = privateKeyBase64;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicKeyBase64")
    public String publicKeyBase64;
    public DownloadDefaultKeyPairResult withPublicKeyBase64(String publicKeyBase64) {
        this.publicKeyBase64 = publicKeyBase64;
        return this;
    }
}