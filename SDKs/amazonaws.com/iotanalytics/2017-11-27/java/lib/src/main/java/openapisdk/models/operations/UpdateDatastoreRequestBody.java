package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDatastoreRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datastoreStorage")
    public UpdateDatastoreRequestBodyDatastoreStorage datastoreStorage;
    public UpdateDatastoreRequestBody withDatastoreStorage(UpdateDatastoreRequestBodyDatastoreStorage datastoreStorage) {
        this.datastoreStorage = datastoreStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileFormatConfiguration")
    public UpdateDatastoreRequestBodyFileFormatConfiguration fileFormatConfiguration;
    public UpdateDatastoreRequestBody withFileFormatConfiguration(UpdateDatastoreRequestBodyFileFormatConfiguration fileFormatConfiguration) {
        this.fileFormatConfiguration = fileFormatConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retentionPeriod")
    public UpdateDatastoreRequestBodyRetentionPeriod retentionPeriod;
    public UpdateDatastoreRequestBody withRetentionPeriod(UpdateDatastoreRequestBodyRetentionPeriod retentionPeriod) {
        this.retentionPeriod = retentionPeriod;
        return this;
    }
}