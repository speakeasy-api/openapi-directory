package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreatePredictorRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AlgorithmArn")
    public String algorithmArn;
    public CreatePredictorRequest withAlgorithmArn(String algorithmArn) {
        this.algorithmArn = algorithmArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoMLOverrideStrategy")
    public AutoMlOverrideStrategyEnum autoMLOverrideStrategy;
    public CreatePredictorRequest withAutoMlOverrideStrategy(AutoMlOverrideStrategyEnum autoMLOverrideStrategy) {
        this.autoMLOverrideStrategy = autoMLOverrideStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionConfig")
    public EncryptionConfig encryptionConfig;
    public CreatePredictorRequest withEncryptionConfig(EncryptionConfig encryptionConfig) {
        this.encryptionConfig = encryptionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EvaluationParameters")
    public EvaluationParameters evaluationParameters;
    public CreatePredictorRequest withEvaluationParameters(EvaluationParameters evaluationParameters) {
        this.evaluationParameters = evaluationParameters;
        return this;
    }
    @JsonProperty("FeaturizationConfig")
    public FeaturizationConfig featurizationConfig;
    public CreatePredictorRequest withFeaturizationConfig(FeaturizationConfig featurizationConfig) {
        this.featurizationConfig = featurizationConfig;
        return this;
    }
    @JsonProperty("ForecastHorizon")
    public Long forecastHorizon;
    public CreatePredictorRequest withForecastHorizon(Long forecastHorizon) {
        this.forecastHorizon = forecastHorizon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForecastTypes")
    public String[] forecastTypes;
    public CreatePredictorRequest withForecastTypes(String[] forecastTypes) {
        this.forecastTypes = forecastTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HPOConfig")
    public HyperParameterTuningJobConfig hpoConfig;
    public CreatePredictorRequest withHpoConfig(HyperParameterTuningJobConfig hpoConfig) {
        this.hpoConfig = hpoConfig;
        return this;
    }
    @JsonProperty("InputDataConfig")
    public InputDataConfig inputDataConfig;
    public CreatePredictorRequest withInputDataConfig(InputDataConfig inputDataConfig) {
        this.inputDataConfig = inputDataConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OptimizationMetric")
    public OptimizationMetricEnum optimizationMetric;
    public CreatePredictorRequest withOptimizationMetric(OptimizationMetricEnum optimizationMetric) {
        this.optimizationMetric = optimizationMetric;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PerformAutoML")
    public Boolean performAutoML;
    public CreatePredictorRequest withPerformAutoMl(Boolean performAutoML) {
        this.performAutoML = performAutoML;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PerformHPO")
    public Boolean performHPO;
    public CreatePredictorRequest withPerformHpo(Boolean performHPO) {
        this.performHPO = performHPO;
        return this;
    }
    @JsonProperty("PredictorName")
    public String predictorName;
    public CreatePredictorRequest withPredictorName(String predictorName) {
        this.predictorName = predictorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreatePredictorRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrainingParameters")
    public java.util.Map<String, String> trainingParameters;
    public CreatePredictorRequest withTrainingParameters(java.util.Map<String, String> trainingParameters) {
        this.trainingParameters = trainingParameters;
        return this;
    }
}