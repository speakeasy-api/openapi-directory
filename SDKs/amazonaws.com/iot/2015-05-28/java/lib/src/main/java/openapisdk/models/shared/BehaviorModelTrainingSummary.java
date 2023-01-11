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
 * BehaviorModelTrainingSummary
 *  The summary of an ML Detect behavior model. 
**/
public class BehaviorModelTrainingSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("behaviorName")
    public String behaviorName;
    public BehaviorModelTrainingSummary withBehaviorName(String behaviorName) {
        this.behaviorName = behaviorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datapointsCollectionPercentage")
    public Double datapointsCollectionPercentage;
    public BehaviorModelTrainingSummary withDatapointsCollectionPercentage(Double datapointsCollectionPercentage) {
        this.datapointsCollectionPercentage = datapointsCollectionPercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastModelRefreshDate")
    public OffsetDateTime lastModelRefreshDate;
    public BehaviorModelTrainingSummary withLastModelRefreshDate(OffsetDateTime lastModelRefreshDate) {
        this.lastModelRefreshDate = lastModelRefreshDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modelStatus")
    public ModelStatusEnum modelStatus;
    public BehaviorModelTrainingSummary withModelStatus(ModelStatusEnum modelStatus) {
        this.modelStatus = modelStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityProfileName")
    public String securityProfileName;
    public BehaviorModelTrainingSummary withSecurityProfileName(String securityProfileName) {
        this.securityProfileName = securityProfileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("trainingDataCollectionStartDate")
    public OffsetDateTime trainingDataCollectionStartDate;
    public BehaviorModelTrainingSummary withTrainingDataCollectionStartDate(OffsetDateTime trainingDataCollectionStartDate) {
        this.trainingDataCollectionStartDate = trainingDataCollectionStartDate;
        return this;
    }
}