package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class StartContinuousExportResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSource")
    public DataSourceEnum dataSource;
    public StartContinuousExportResponse withDataSource(DataSourceEnum dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportId")
    public String exportId;
    public StartContinuousExportResponse withExportId(String exportId) {
        this.exportId = exportId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Bucket")
    public String s3Bucket;
    public StartContinuousExportResponse withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaStorageConfig")
    public java.util.Map<String, String> schemaStorageConfig;
    public StartContinuousExportResponse withSchemaStorageConfig(java.util.Map<String, String> schemaStorageConfig) {
        this.schemaStorageConfig = schemaStorageConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startTime")
    public OffsetDateTime startTime;
    public StartContinuousExportResponse withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
}