package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeDatasetImportJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public DescribeDatasetImportJobResponse withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSize")
    public Double dataSize;
    public DescribeDatasetImportJobResponse withDataSize(Double dataSize) {
        this.dataSize = dataSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataSource")
    public DataSource dataSource;
    public DescribeDatasetImportJobResponse withDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetArn")
    public String datasetArn;
    public DescribeDatasetImportJobResponse withDatasetArn(String datasetArn) {
        this.datasetArn = datasetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetImportJobArn")
    public String datasetImportJobArn;
    public DescribeDatasetImportJobResponse withDatasetImportJobArn(String datasetImportJobArn) {
        this.datasetImportJobArn = datasetImportJobArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetImportJobName")
    public String datasetImportJobName;
    public DescribeDatasetImportJobResponse withDatasetImportJobName(String datasetImportJobName) {
        this.datasetImportJobName = datasetImportJobName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EstimatedTimeRemainingInMinutes")
    public Long estimatedTimeRemainingInMinutes;
    public DescribeDatasetImportJobResponse withEstimatedTimeRemainingInMinutes(Long estimatedTimeRemainingInMinutes) {
        this.estimatedTimeRemainingInMinutes = estimatedTimeRemainingInMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FieldStatistics")
    public java.util.Map<String, Statistics> fieldStatistics;
    public DescribeDatasetImportJobResponse withFieldStatistics(java.util.Map<String, Statistics> fieldStatistics) {
        this.fieldStatistics = fieldStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GeolocationFormat")
    public String geolocationFormat;
    public DescribeDatasetImportJobResponse withGeolocationFormat(String geolocationFormat) {
        this.geolocationFormat = geolocationFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModificationTime")
    public OffsetDateTime lastModificationTime;
    public DescribeDatasetImportJobResponse withLastModificationTime(OffsetDateTime lastModificationTime) {
        this.lastModificationTime = lastModificationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public DescribeDatasetImportJobResponse withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public DescribeDatasetImportJobResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeZone")
    public String timeZone;
    public DescribeDatasetImportJobResponse withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimestampFormat")
    public String timestampFormat;
    public DescribeDatasetImportJobResponse withTimestampFormat(String timestampFormat) {
        this.timestampFormat = timestampFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UseGeolocationForTimeZone")
    public Boolean useGeolocationForTimeZone;
    public DescribeDatasetImportJobResponse withUseGeolocationForTimeZone(Boolean useGeolocationForTimeZone) {
        this.useGeolocationForTimeZone = useGeolocationForTimeZone;
        return this;
    }
}