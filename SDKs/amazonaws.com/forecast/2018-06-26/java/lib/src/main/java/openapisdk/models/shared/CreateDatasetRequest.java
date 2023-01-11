package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateDatasetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataFrequency")
    public String dataFrequency;
    public CreateDatasetRequest withDataFrequency(String dataFrequency) {
        this.dataFrequency = dataFrequency;
        return this;
    }
    @JsonProperty("DatasetName")
    public String datasetName;
    public CreateDatasetRequest withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
    @JsonProperty("DatasetType")
    public DatasetTypeEnum datasetType;
    public CreateDatasetRequest withDatasetType(DatasetTypeEnum datasetType) {
        this.datasetType = datasetType;
        return this;
    }
    @JsonProperty("Domain")
    public DomainEnum domain;
    public CreateDatasetRequest withDomain(DomainEnum domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionConfig")
    public EncryptionConfig encryptionConfig;
    public CreateDatasetRequest withEncryptionConfig(EncryptionConfig encryptionConfig) {
        this.encryptionConfig = encryptionConfig;
        return this;
    }
    @JsonProperty("Schema")
    public Schema schema;
    public CreateDatasetRequest withSchema(Schema schema) {
        this.schema = schema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateDatasetRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}