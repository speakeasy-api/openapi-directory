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
 * DatasetImportJobSummary
 * Provides a summary of the dataset import job properties used in the <a>ListDatasetImportJobs</a> operation. To get the complete set of properties, call the <a>DescribeDatasetImportJob</a> operation, and provide the <code>DatasetImportJobArn</code>.
**/
public class DatasetImportJobSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public DatasetImportJobSummary withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSource")
    public DataSource dataSource;
    public DatasetImportJobSummary withDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetImportJobArn")
    public String datasetImportJobArn;
    public DatasetImportJobSummary withDatasetImportJobArn(String datasetImportJobArn) {
        this.datasetImportJobArn = datasetImportJobArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetImportJobName")
    public String datasetImportJobName;
    public DatasetImportJobSummary withDatasetImportJobName(String datasetImportJobName) {
        this.datasetImportJobName = datasetImportJobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModificationTime")
    public OffsetDateTime lastModificationTime;
    public DatasetImportJobSummary withLastModificationTime(OffsetDateTime lastModificationTime) {
        this.lastModificationTime = lastModificationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public DatasetImportJobSummary withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public DatasetImportJobSummary withStatus(String status) {
        this.status = status;
        return this;
    }
}