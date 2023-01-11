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
 * Solution
 * An object that provides information about a solution. A solution is a trained model that can be deployed as a campaign.
**/
public class Solution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoMLResult")
    public AutoMlResult autoMLResult;
    public Solution withAutoMlResult(AutoMlResult autoMLResult) {
        this.autoMLResult = autoMLResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDateTime")
    public OffsetDateTime creationDateTime;
    public Solution withCreationDateTime(OffsetDateTime creationDateTime) {
        this.creationDateTime = creationDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetGroupArn")
    public String datasetGroupArn;
    public Solution withDatasetGroupArn(String datasetGroupArn) {
        this.datasetGroupArn = datasetGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventType")
    public String eventType;
    public Solution withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdatedDateTime")
    public OffsetDateTime lastUpdatedDateTime;
    public Solution withLastUpdatedDateTime(OffsetDateTime lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestSolutionVersion")
    public SolutionVersionSummary latestSolutionVersion;
    public Solution withLatestSolutionVersion(SolutionVersionSummary latestSolutionVersion) {
        this.latestSolutionVersion = latestSolutionVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Solution withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performAutoML")
    public Boolean performAutoML;
    public Solution withPerformAutoMl(Boolean performAutoML) {
        this.performAutoML = performAutoML;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performHPO")
    public Boolean performHPO;
    public Solution withPerformHpo(Boolean performHPO) {
        this.performHPO = performHPO;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipeArn")
    public String recipeArn;
    public Solution withRecipeArn(String recipeArn) {
        this.recipeArn = recipeArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("solutionArn")
    public String solutionArn;
    public Solution withSolutionArn(String solutionArn) {
        this.solutionArn = solutionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("solutionConfig")
    public SolutionConfig solutionConfig;
    public Solution withSolutionConfig(SolutionConfig solutionConfig) {
        this.solutionConfig = solutionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public Solution withStatus(String status) {
        this.status = status;
        return this;
    }
}