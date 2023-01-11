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
 * Provides a summary of the properties of a dataset import job. For a complete listing, call the <a>DescribeDatasetImportJob</a> API.
**/
public class DatasetImportJobSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDateTime")
    public OffsetDateTime creationDateTime;
    public DatasetImportJobSummary withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetImportJobArn")
    public String datasetImportJobArn;
    public DatasetImportJobSummary withDatasetImportJobArn(String datasetImportJobArn) {
        this.datasetImportJobArn = datasetImportJobArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public String failureReason;
    public DatasetImportJobSummary withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobName")
    public String jobName;
    public DatasetImportJobSummary withJobName(String jobName) {
        this.jobName = jobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedDateTime")
    public OffsetDateTime lastUpdatedDateTime;
    public DatasetImportJobSummary withLastUpdatedDateTime(OffsetDateTime lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public DatasetImportJobSummary withStatus(String status) {
        this.status = status;
        return this;
    }
}