package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * CustomKeyStoresListEntry
 * Contains information about each custom key store in the custom key store list.
**/
public class CustomKeyStoresListEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudHsmClusterId")
    public String cloudHsmClusterId;
    public CustomKeyStoresListEntry withCloudHsmClusterId(String cloudHsmClusterId) {
        this.cloudHsmClusterId = cloudHsmClusterId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionErrorCode")
    public ConnectionErrorCodeTypeEnum connectionErrorCode;
    public CustomKeyStoresListEntry withConnectionErrorCode(ConnectionErrorCodeTypeEnum connectionErrorCode) {
        this.connectionErrorCode = connectionErrorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionState")
    public ConnectionStateTypeEnum connectionState;
    public CustomKeyStoresListEntry withConnectionState(ConnectionStateTypeEnum connectionState) {
        this.connectionState = connectionState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationDate")
    public OffsetDateTime creationDate;
    public CustomKeyStoresListEntry withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomKeyStoreId")
    public String customKeyStoreId;
    public CustomKeyStoresListEntry withCustomKeyStoreId(String customKeyStoreId) {
        this.customKeyStoreId = customKeyStoreId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomKeyStoreName")
    public String customKeyStoreName;
    public CustomKeyStoresListEntry withCustomKeyStoreName(String customKeyStoreName) {
        this.customKeyStoreName = customKeyStoreName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrustAnchorCertificate")
    public String trustAnchorCertificate;
    public CustomKeyStoresListEntry withTrustAnchorCertificate(String trustAnchorCertificate) {
        this.trustAnchorCertificate = trustAnchorCertificate;
        return this;
    }
}