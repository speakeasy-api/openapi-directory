package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribePredictorResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlgorithmArn")
    public String algorithmArn;
    public DescribePredictorResponse withAlgorithmArn(String algorithmArn) {
        this.algorithmArn = algorithmArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoMLAlgorithmArns")
    public String[] autoMLAlgorithmArns;
    public DescribePredictorResponse withAutoMlAlgorithmArns(String[] autoMLAlgorithmArns) {
        this.autoMLAlgorithmArns = autoMLAlgorithmArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoMLOverrideStrategy")
    public AutoMlOverrideStrategyEnum autoMLOverrideStrategy;
    public DescribePredictorResponse withAutoMlOverrideStrategy(AutoMlOverrideStrategyEnum autoMLOverrideStrategy) {
        this.autoMLOverrideStrategy = autoMLOverrideStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public DescribePredictorResponse withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetImportJobArns")
    public String[] datasetImportJobArns;
    public DescribePredictorResponse withDatasetImportJobArns(String[] datasetImportJobArns) {
        this.datasetImportJobArns = datasetImportJobArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionConfig")
    public EncryptionConfig encryptionConfig;
    public DescribePredictorResponse withEncryptionConfig(EncryptionConfig encryptionConfig) {
        this.encryptionConfig = encryptionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EstimatedTimeRemainingInMinutes")
    public Long estimatedTimeRemainingInMinutes;
    public DescribePredictorResponse withEstimatedTimeRemainingInMinutes(Long estimatedTimeRemainingInMinutes) {
        this.estimatedTimeRemainingInMinutes = estimatedTimeRemainingInMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EvaluationParameters")
    public EvaluationParameters evaluationParameters;
    public DescribePredictorResponse withEvaluationParameters(EvaluationParameters evaluationParameters) {
        this.evaluationParameters = evaluationParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeaturizationConfig")
    public FeaturizationConfig featurizationConfig;
    public DescribePredictorResponse withFeaturizationConfig(FeaturizationConfig featurizationConfig) {
        this.featurizationConfig = featurizationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForecastHorizon")
    public Long forecastHorizon;
    public DescribePredictorResponse withForecastHorizon(Long forecastHorizon) {
        this.forecastHorizon = forecastHorizon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForecastTypes")
    public String[] forecastTypes;
    public DescribePredictorResponse withForecastTypes(String[] forecastTypes) {
        this.forecastTypes = forecastTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HPOConfig")
    public HyperParameterTuningJobConfig hpoConfig;
    public DescribePredictorResponse withHpoConfig(HyperParameterTuningJobConfig hpoConfig) {
        this.hpoConfig = hpoConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputDataConfig")
    public InputDataConfig inputDataConfig;
    public DescribePredictorResponse withInputDataConfig(InputDataConfig inputDataConfig) {
        this.inputDataConfig = inputDataConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModificationTime")
    public OffsetDateTime lastModificationTime;
    public DescribePredictorResponse withLastModificationTime(OffsetDateTime lastModificationTime) {
        this.lastModificationTime = lastModificationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public DescribePredictorResponse withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OptimizationMetric")
    public OptimizationMetricEnum optimizationMetric;
    public DescribePredictorResponse withOptimizationMetric(OptimizationMetricEnum optimizationMetric) {
        this.optimizationMetric = optimizationMetric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PerformAutoML")
    public Boolean performAutoML;
    public DescribePredictorResponse withPerformAutoMl(Boolean performAutoML) {
        this.performAutoML = performAutoML;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PerformHPO")
    public Boolean performHPO;
    public DescribePredictorResponse withPerformHpo(Boolean performHPO) {
        this.performHPO = performHPO;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PredictorArn")
    public String predictorArn;
    public DescribePredictorResponse withPredictorArn(String predictorArn) {
        this.predictorArn = predictorArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PredictorExecutionDetails")
    public PredictorExecutionDetails predictorExecutionDetails;
    public DescribePredictorResponse withPredictorExecutionDetails(PredictorExecutionDetails predictorExecutionDetails) {
        this.predictorExecutionDetails = predictorExecutionDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PredictorName")
    public String predictorName;
    public DescribePredictorResponse withPredictorName(String predictorName) {
        this.predictorName = predictorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public DescribePredictorResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrainingParameters")
    public java.util.Map<String, String> trainingParameters;
    public DescribePredictorResponse withTrainingParameters(java.util.Map<String, String> trainingParameters) {
        this.trainingParameters = trainingParameters;
        return this;
    }
}