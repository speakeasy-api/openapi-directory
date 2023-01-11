package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataCatalogEncryptionSettings
 * Contains configuration information for maintaining Data Catalog security.
**/
public class DataCatalogEncryptionSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionPasswordEncryption")
    public ConnectionPasswordEncryption connectionPasswordEncryption;
    public DataCatalogEncryptionSettings withConnectionPasswordEncryption(ConnectionPasswordEncryption connectionPasswordEncryption) {
        this.connectionPasswordEncryption = connectionPasswordEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionAtRest")
    public EncryptionAtRest encryptionAtRest;
    public DataCatalogEncryptionSettings withEncryptionAtRest(EncryptionAtRest encryptionAtRest) {
        this.encryptionAtRest = encryptionAtRest;
        return this;
    }
}