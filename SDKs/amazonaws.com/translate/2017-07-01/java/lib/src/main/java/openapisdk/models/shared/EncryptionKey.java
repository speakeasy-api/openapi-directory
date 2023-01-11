package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EncryptionKey
 * The encryption key used to encrypt this object.
**/
public class EncryptionKey {
    @JsonProperty("Id")
    public String id;
    public EncryptionKey withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("Type")
    public EncryptionKeyTypeEnum type;
    public EncryptionKey withType(EncryptionKeyTypeEnum type) {
        this.type = type;
        return this;
    }
}