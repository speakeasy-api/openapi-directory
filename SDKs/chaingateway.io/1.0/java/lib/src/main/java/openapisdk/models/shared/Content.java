package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Content {
    @JsonProperty("address")
    public String address;
    public Content withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonProperty("crypto")
    public Crypto crypto;
    public Content withCrypto(Crypto crypto) {
        this.crypto = crypto;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Content withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("version")
    public Integer version;
    public Content withVersion(Integer version) {
        this.version = version;
        return this;
    }
}