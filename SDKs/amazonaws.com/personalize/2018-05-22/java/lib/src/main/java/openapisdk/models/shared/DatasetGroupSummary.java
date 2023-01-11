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
 * DatasetGroupSummary
 * Provides a summary of the properties of a dataset group. For a complete listing, call the <a>DescribeDatasetGroup</a> API.
**/
public class DatasetGroupSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDateTime")
    public OffsetDateTime creationDateTime;
    public DatasetGroupSummary withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetGroupArn")
    public String datasetGroupArn;
    public DatasetGroupSummary withDatasetGroupArn(String datasetGroupArn) {
        this.datasetGroupArn = datasetGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public String failureReason;
    public DatasetGroupSummary withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedDateTime")
    public OffsetDateTime lastUpdatedDateTime;
    public DatasetGroupSummary withLastUpdatedDateTime(OffsetDateTime lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DatasetGroupSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public DatasetGroupSummary withStatus(String status) {
        this.status = status;
        return this;
    }
}