package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutStorageConfigurationResponse {
    @JsonProperty("configurationStatus")
    public ConfigurationStatus configurationStatus;
    public PutStorageConfigurationResponse withConfigurationStatus(ConfigurationStatus configurationStatus) {
        this.configurationStatus = configurationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiLayerStorage")
    public MultiLayerStorage multiLayerStorage;
    public PutStorageConfigurationResponse withMultiLayerStorage(MultiLayerStorage multiLayerStorage) {
        this.multiLayerStorage = multiLayerStorage;
        return this;
    }
    @JsonProperty("storageType")
    public StorageTypeEnum storageType;
    public PutStorageConfigurationResponse withStorageType(StorageTypeEnum storageType) {
        this.storageType = storageType;
        return this;
    }
}