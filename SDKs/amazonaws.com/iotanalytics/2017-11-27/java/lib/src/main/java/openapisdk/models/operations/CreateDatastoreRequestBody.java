package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDatastoreRequestBody {
    @JsonProperty("datastoreName")
    public String datastoreName;
    public CreateDatastoreRequestBody withDatastoreName(String datastoreName) {
        this.datastoreName = datastoreName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datastorePartitions")
    public CreateDatastoreRequestBodyDatastorePartitions datastorePartitions;
    public CreateDatastoreRequestBody withDatastorePartitions(CreateDatastoreRequestBodyDatastorePartitions datastorePartitions) {
        this.datastorePartitions = datastorePartitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datastoreStorage")
    public CreateDatastoreRequestBodyDatastoreStorage datastoreStorage;
    public CreateDatastoreRequestBody withDatastoreStorage(CreateDatastoreRequestBodyDatastoreStorage datastoreStorage) {
        this.datastoreStorage = datastoreStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileFormatConfiguration")
    public CreateDatastoreRequestBodyFileFormatConfiguration fileFormatConfiguration;
    public CreateDatastoreRequestBody withFileFormatConfiguration(CreateDatastoreRequestBodyFileFormatConfiguration fileFormatConfiguration) {
        this.fileFormatConfiguration = fileFormatConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retentionPeriod")
    public CreateDatastoreRequestBodyRetentionPeriod retentionPeriod;
    public CreateDatastoreRequestBody withRetentionPeriod(CreateDatastoreRequestBodyRetentionPeriod retentionPeriod) {
        this.retentionPeriod = retentionPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateDatastoreRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}