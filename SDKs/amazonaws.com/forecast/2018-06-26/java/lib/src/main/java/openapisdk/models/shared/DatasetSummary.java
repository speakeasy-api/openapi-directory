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
 * DatasetSummary
 * Provides a summary of the dataset properties used in the <a>ListDatasets</a> operation. To get the complete set of properties, call the <a>DescribeDataset</a> operation, and provide the <code>DatasetArn</code>.
**/
public class DatasetSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public DatasetSummary withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetArn")
    public String datasetArn;
    public DatasetSummary withDatasetArn(String datasetArn) {
        this.datasetArn = datasetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetName")
    public String datasetName;
    public DatasetSummary withDatasetName(String datasetName) {
        this.datasetName = datasetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetType")
    public DatasetTypeEnum datasetType;
    public DatasetSummary withDatasetType(DatasetTypeEnum datasetType) {
        this.datasetType = datasetType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Domain")
    public DomainEnum domain;
    public DatasetSummary withDomain(DomainEnum domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModificationTime")
    public OffsetDateTime lastModificationTime;
    public DatasetSummary withLastModificationTime(OffsetDateTime lastModificationTime) {
        this.lastModificationTime = lastModificationTime;
        return this;
    }
}