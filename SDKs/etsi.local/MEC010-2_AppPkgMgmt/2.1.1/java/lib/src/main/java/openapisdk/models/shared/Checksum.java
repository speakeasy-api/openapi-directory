package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Checksum {
    @JsonProperty("algorithm")
    public String algorithm;
    public Checksum withAlgorithm(String algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonProperty("hash")
    public String hash;
    public Checksum withHash(String hash) {
        this.hash = hash;
        return this;
    }
}