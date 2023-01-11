package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteImportedKeyMaterialRequest {
    @JsonProperty("KeyId")
    public String keyId;
    public DeleteImportedKeyMaterialRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}