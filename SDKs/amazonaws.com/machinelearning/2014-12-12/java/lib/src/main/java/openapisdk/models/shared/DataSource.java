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
 * DataSource
 * <p> Represents the output of the <code>GetDataSource</code> operation. </p> <p> The content consists of the detailed metadata and data file information and the current status of the <code>DataSource</code>. </p>
**/
public class DataSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComputeStatistics")
    public Boolean computeStatistics;
    public DataSource withComputeStatistics(Boolean computeStatistics) {
        this.computeStatistics = computeStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComputeTime")
    public Long computeTime;
    public DataSource withComputeTime(Long computeTime) {
        this.computeTime = computeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;
    public DataSource withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedByIamUser")
    public String createdByIamUser;
    public DataSource withCreatedByIamUser(String createdByIamUser) {
        this.createdByIamUser = createdByIamUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataLocationS3")
    public String dataLocationS3;
    public DataSource withDataLocationS3(String dataLocationS3) {
        this.dataLocationS3 = dataLocationS3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataRearrangement")
    public String dataRearrangement;
    public DataSource withDataRearrangement(String dataRearrangement) {
        this.dataRearrangement = dataRearrangement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSizeInBytes")
    public Long dataSizeInBytes;
    public DataSource withDataSizeInBytes(Long dataSizeInBytes) {
        this.dataSizeInBytes = dataSizeInBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSourceId")
    public String dataSourceId;
    public DataSource withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FinishedAt")
    public OffsetDateTime finishedAt;
    public DataSource withFinishedAt(OffsetDateTime finishedAt) {
        this.finishedAt = finishedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public DataSource withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public DataSource withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public DataSource withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfFiles")
    public Long numberOfFiles;
    public DataSource withNumberOfFiles(Long numberOfFiles) {
        this.numberOfFiles = numberOfFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RDSMetadata")
    public RdsMetadata rdsMetadata;
    public DataSource withRdsMetadata(RdsMetadata rdsMetadata) {
        this.rdsMetadata = rdsMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedshiftMetadata")
    public RedshiftMetadata redshiftMetadata;
    public DataSource withRedshiftMetadata(RedshiftMetadata redshiftMetadata) {
        this.redshiftMetadata = redshiftMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARN")
    public String roleARN;
    public DataSource withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartedAt")
    public OffsetDateTime startedAt;
    public DataSource withStartedAt(OffsetDateTime startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public EntityStatusEnum status;
    public DataSource withStatus(EntityStatusEnum status) {
        this.status = status;
        return this;
    }
}