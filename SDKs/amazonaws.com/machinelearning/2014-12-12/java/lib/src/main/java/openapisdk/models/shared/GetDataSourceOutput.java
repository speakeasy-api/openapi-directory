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
 * GetDataSourceOutput
 * Represents the output of a <code>GetDataSource</code> operation and describes a <code>DataSource</code>.
**/
public class GetDataSourceOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComputeStatistics")
    public Boolean computeStatistics;
    public GetDataSourceOutput withComputeStatistics(Boolean computeStatistics) {
        this.computeStatistics = computeStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComputeTime")
    public Long computeTime;
    public GetDataSourceOutput withComputeTime(Long computeTime) {
        this.computeTime = computeTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;
    public GetDataSourceOutput withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedByIamUser")
    public String createdByIamUser;
    public GetDataSourceOutput withCreatedByIamUser(String createdByIamUser) {
        this.createdByIamUser = createdByIamUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataLocationS3")
    public String dataLocationS3;
    public GetDataSourceOutput withDataLocationS3(String dataLocationS3) {
        this.dataLocationS3 = dataLocationS3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataRearrangement")
    public String dataRearrangement;
    public GetDataSourceOutput withDataRearrangement(String dataRearrangement) {
        this.dataRearrangement = dataRearrangement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSizeInBytes")
    public Long dataSizeInBytes;
    public GetDataSourceOutput withDataSizeInBytes(Long dataSizeInBytes) {
        this.dataSizeInBytes = dataSizeInBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSourceId")
    public String dataSourceId;
    public GetDataSourceOutput withDataSourceId(String dataSourceId) {
        this.dataSourceId = dataSourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSourceSchema")
    public String dataSourceSchema;
    public GetDataSourceOutput withDataSourceSchema(String dataSourceSchema) {
        this.dataSourceSchema = dataSourceSchema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("FinishedAt")
    public OffsetDateTime finishedAt;
    public GetDataSourceOutput withFinishedAt(OffsetDateTime finishedAt) {
        this.finishedAt = finishedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedAt")
    public OffsetDateTime lastUpdatedAt;
    public GetDataSourceOutput withLastUpdatedAt(OffsetDateTime lastUpdatedAt) {
        this.lastUpdatedAt = lastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogUri")
    public String logUri;
    public GetDataSourceOutput withLogUri(String logUri) {
        this.logUri = logUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public GetDataSourceOutput withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public GetDataSourceOutput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberOfFiles")
    public Long numberOfFiles;
    public GetDataSourceOutput withNumberOfFiles(Long numberOfFiles) {
        this.numberOfFiles = numberOfFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RDSMetadata")
    public RdsMetadata rdsMetadata;
    public GetDataSourceOutput withRdsMetadata(RdsMetadata rdsMetadata) {
        this.rdsMetadata = rdsMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedshiftMetadata")
    public RedshiftMetadata redshiftMetadata;
    public GetDataSourceOutput withRedshiftMetadata(RedshiftMetadata redshiftMetadata) {
        this.redshiftMetadata = redshiftMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARN")
    public String roleARN;
    public GetDataSourceOutput withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("StartedAt")
    public OffsetDateTime startedAt;
    public GetDataSourceOutput withStartedAt(OffsetDateTime startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public EntityStatusEnum status;
    public GetDataSourceOutput withStatus(EntityStatusEnum status) {
        this.status = status;
        return this;
    }
}