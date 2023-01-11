package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAllKeys200ApplicationJsonSshKeys {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprint")
    public String fingerprint;
    public ListAllKeys200ApplicationJsonSshKeys withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ListAllKeys200ApplicationJsonSshKeys withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ListAllKeys200ApplicationJsonSshKeys withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("public_key")
    public String publicKey;
    public ListAllKeys200ApplicationJsonSshKeys withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}