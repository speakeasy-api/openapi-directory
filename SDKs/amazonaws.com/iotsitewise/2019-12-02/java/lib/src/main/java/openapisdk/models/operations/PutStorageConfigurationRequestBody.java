package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutStorageConfigurationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiLayerStorage")
    public PutStorageConfigurationRequestBodyMultiLayerStorage multiLayerStorage;
    public PutStorageConfigurationRequestBody withMultiLayerStorage(PutStorageConfigurationRequestBodyMultiLayerStorage multiLayerStorage) {
        this.multiLayerStorage = multiLayerStorage;
        return this;
    }
    @JsonProperty("storageType")
    public PutStorageConfigurationRequestBodyStorageTypeEnum storageType;
    public PutStorageConfigurationRequestBody withStorageType(PutStorageConfigurationRequestBodyStorageTypeEnum storageType) {
        this.storageType = storageType;
        return this;
    }
}