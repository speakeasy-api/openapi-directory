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
 * ContinuousExportDescription
 * A list of continuous export descriptions.
**/
public class ContinuousExportDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSource")
    public DataSourceEnum dataSource;
    public ContinuousExportDescription withDataSource(DataSourceEnum dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportId")
    public String exportId;
    public ContinuousExportDescription withExportId(String exportId) {
        this.exportId = exportId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Bucket")
    public String s3Bucket;
    public ContinuousExportDescription withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaStorageConfig")
    public java.util.Map<String, String> schemaStorageConfig;
    public ContinuousExportDescription withSchemaStorageConfig(java.util.Map<String, String> schemaStorageConfig) {
        this.schemaStorageConfig = schemaStorageConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public ContinuousExportDescription withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ContinuousExportStatusEnum status;
    public ContinuousExportDescription withStatus(ContinuousExportStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusDetail")
    public String statusDetail;
    public ContinuousExportDescription withStatusDetail(String statusDetail) {
        this.statusDetail = statusDetail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("stopTime")
    public OffsetDateTime stopTime;
    public ContinuousExportDescription withStopTime(OffsetDateTime stopTime) {
        this.stopTime = stopTime;
        return this;
    }
}