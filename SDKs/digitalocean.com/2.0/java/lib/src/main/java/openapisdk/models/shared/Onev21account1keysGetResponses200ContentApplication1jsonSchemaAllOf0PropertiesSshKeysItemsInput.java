package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSshKeysItemsInput {
    @JsonProperty("name")
    public String name;
    public Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSshKeysItemsInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("public_key")
    public String publicKey;
    public Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSshKeysItemsInput withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}