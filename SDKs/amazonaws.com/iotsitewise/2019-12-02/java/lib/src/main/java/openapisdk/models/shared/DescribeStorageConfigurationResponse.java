package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeStorageConfigurationResponse {
    @JsonProperty("configurationStatus")
    public ConfigurationStatus configurationStatus;
    public DescribeStorageConfigurationResponse withConfigurationStatus(ConfigurationStatus configurationStatus) {
        this.configurationStatus = configurationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdateDate")
    public OffsetDateTime lastUpdateDate;
    public DescribeStorageConfigurationResponse withLastUpdateDate(OffsetDateTime lastUpdateDate) {
        this.lastUpdateDate = lastUpdateDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multiLayerStorage")
    public MultiLayerStorage multiLayerStorage;
    public DescribeStorageConfigurationResponse withMultiLayerStorage(MultiLayerStorage multiLayerStorage) {
        this.multiLayerStorage = multiLayerStorage;
        return this;
    }
    @JsonProperty("storageType")
    public StorageTypeEnum storageType;
    public DescribeStorageConfigurationResponse withStorageType(StorageTypeEnum storageType) {
        this.storageType = storageType;
        return this;
    }
}