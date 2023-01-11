package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExpiredCertPublicKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public String algorithm;
    public ExpiredCertPublicKey withAlgorithm(String algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bits")
    public Long bits;
    public ExpiredCertPublicKey withBits(Long bits) {
        this.bits = bits;
        return this;
    }
}