package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeForecastResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public DescribeForecastResponse withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetGroupArn")
    public String datasetGroupArn;
    public DescribeForecastResponse withDatasetGroupArn(String datasetGroupArn) {
        this.datasetGroupArn = datasetGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EstimatedTimeRemainingInMinutes")
    public Long estimatedTimeRemainingInMinutes;
    public DescribeForecastResponse withEstimatedTimeRemainingInMinutes(Long estimatedTimeRemainingInMinutes) {
        this.estimatedTimeRemainingInMinutes = estimatedTimeRemainingInMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForecastArn")
    public String forecastArn;
    public DescribeForecastResponse withForecastArn(String forecastArn) {
        this.forecastArn = forecastArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForecastName")
    public String forecastName;
    public DescribeForecastResponse withForecastName(String forecastName) {
        this.forecastName = forecastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForecastTypes")
    public String[] forecastTypes;
    public DescribeForecastResponse withForecastTypes(String[] forecastTypes) {
        this.forecastTypes = forecastTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModificationTime")
    public OffsetDateTime lastModificationTime;
    public DescribeForecastResponse withLastModificationTime(OffsetDateTime lastModificationTime) {
        this.lastModificationTime = lastModificationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public DescribeForecastResponse withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PredictorArn")
    public String predictorArn;
    public DescribeForecastResponse withPredictorArn(String predictorArn) {
        this.predictorArn = predictorArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public DescribeForecastResponse withStatus(String status) {
        this.status = status;
        return this;
    }
}