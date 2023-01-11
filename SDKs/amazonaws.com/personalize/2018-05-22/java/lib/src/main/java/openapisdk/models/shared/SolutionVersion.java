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
 * SolutionVersion
 * An object that provides information about a specific version of a <a>Solution</a>.
**/
public class SolutionVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDateTime")
    public OffsetDateTime creationDateTime;
    public SolutionVersion withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetGroupArn")
    public String datasetGroupArn;
    public SolutionVersion withDatasetGroupArn(String datasetGroupArn) {
        this.datasetGroupArn = datasetGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventType")
    public String eventType;
    public SolutionVersion withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public String failureReason;
    public SolutionVersion withFailureReason(String failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedDateTime")
    public OffsetDateTime lastUpdatedDateTime;
    public SolutionVersion withLastUpdatedDateTime(OffsetDateTime lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performAutoML")
    public Boolean performAutoML;
    public SolutionVersion withPerformAutoMl(Boolean performAutoML) {
        this.performAutoML = performAutoML;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performHPO")
    public Boolean performHPO;
    public SolutionVersion withPerformHpo(Boolean performHPO) {
        this.performHPO = performHPO;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipeArn")
    public String recipeArn;
    public SolutionVersion withRecipeArn(String recipeArn) {
        this.recipeArn = recipeArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("solutionArn")
    public String solutionArn;
    public SolutionVersion withSolutionArn(String solutionArn) {
        this.solutionArn = solutionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("solutionConfig")
    public SolutionConfig solutionConfig;
    public SolutionVersion withSolutionConfig(SolutionConfig solutionConfig) {
        this.solutionConfig = solutionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("solutionVersionArn")
    public String solutionVersionArn;
    public SolutionVersion withSolutionVersionArn(String solutionVersionArn) {
        this.solutionVersionArn = solutionVersionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public SolutionVersion withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trainingHours")
    public Double trainingHours;
    public SolutionVersion withTrainingHours(Double trainingHours) {
        this.trainingHours = trainingHours;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trainingMode")
    public TrainingModeEnum trainingMode;
    public SolutionVersion withTrainingMode(TrainingModeEnum trainingMode) {
        this.trainingMode = trainingMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tunedHPOParams")
    public TunedHpoParams tunedHPOParams;
    public SolutionVersion withTunedHpoParams(TunedHpoParams tunedHPOParams) {
        this.tunedHPOParams = tunedHPOParams;
        return this;
    }
}