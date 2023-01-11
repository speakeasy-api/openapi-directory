package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EncryptionAtRest
 * Specifies the encryption-at-rest configuration for the Data Catalog.
**/
public class EncryptionAtRest {
    @JsonProperty("CatalogEncryptionMode")
    public CatalogEncryptionModeEnum catalogEncryptionMode;
    public EncryptionAtRest withCatalogEncryptionMode(CatalogEncryptionModeEnum catalogEncryptionMode) {
        this.catalogEncryptionMode = catalogEncryptionMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SseAwsKmsKeyId")
    public String sseAwsKmsKeyId;
    public EncryptionAtRest withSseAwsKmsKeyId(String sseAwsKmsKeyId) {
        this.sseAwsKmsKeyId = sseAwsKmsKeyId;
        return this;
    }
}