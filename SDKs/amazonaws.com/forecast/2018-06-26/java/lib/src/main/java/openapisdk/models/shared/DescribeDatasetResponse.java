package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeDatasetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public DescribeDatasetResponse withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataFrequency")
    public String dataFrequency;
    public DescribeDatasetResponse withDataFrequency(String dataFrequency) {
        this.dataFrequency = dataFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetArn")
    public String datasetArn;
    public DescribeDatasetResponse withDatasetArn(String datasetArn) {
        this.datasetArn = datasetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetName")
    public String datasetName;
    public DescribeDatasetResponse withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetType")
    public DatasetTypeEnum datasetType;
    public DescribeDatasetResponse withDatasetType(DatasetTypeEnum datasetType) {
        this.datasetType = datasetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Domain")
    public DomainEnum domain;
    public DescribeDatasetResponse withDomain(DomainEnum domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionConfig")
    public EncryptionConfig encryptionConfig;
    public DescribeDatasetResponse withEncryptionConfig(EncryptionConfig encryptionConfig) {
        this.encryptionConfig = encryptionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModificationTime")
    public OffsetDateTime lastModificationTime;
    public DescribeDatasetResponse withLastModificationTime(OffsetDateTime lastModificationTime) {
        this.lastModificationTime = lastModificationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schema")
    public Schema schema;
    public DescribeDatasetResponse withSchema(Schema schema) {
        this.schema = schema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public DescribeDatasetResponse withStatus(String status) {
        this.status = status;
        return this;
    }
}