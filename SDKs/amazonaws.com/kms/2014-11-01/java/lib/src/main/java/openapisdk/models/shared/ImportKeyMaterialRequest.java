package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ImportKeyMaterialRequest {
    @JsonProperty("EncryptedKeyMaterial")
    public String encryptedKeyMaterial;
    public ImportKeyMaterialRequest withEncryptedKeyMaterial(String encryptedKeyMaterial) {
        this.encryptedKeyMaterial = encryptedKeyMaterial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpirationModel")
    public ExpirationModelTypeEnum expirationModel;
    public ImportKeyMaterialRequest withExpirationModel(ExpirationModelTypeEnum expirationModel) {
        this.expirationModel = expirationModel;
        return this;
    }
    @JsonProperty("ImportToken")
    public String importToken;
    public ImportKeyMaterialRequest withImportToken(String importToken) {
        this.importToken = importToken;
        return this;
    }
    @JsonProperty("KeyId")
    public String keyId;
    public ImportKeyMaterialRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ValidTo")
    public OffsetDateTime validTo;
    public ImportKeyMaterialRequest withValidTo(OffsetDateTime validTo) {
        this.validTo = validTo;
        return this;
    }
}