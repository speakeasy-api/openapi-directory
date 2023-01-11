package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSolutionRequest {
    @JsonProperty("datasetGroupArn")
    public String datasetGroupArn;
    public CreateSolutionRequest withDatasetGroupArn(String datasetGroupArn) {
        this.datasetGroupArn = datasetGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventType")
    public String eventType;
    public CreateSolutionRequest withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateSolutionRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performAutoML")
    public Boolean performAutoML;
    public CreateSolutionRequest withPerformAutoMl(Boolean performAutoML) {
        this.performAutoML = performAutoML;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performHPO")
    public Boolean performHPO;
    public CreateSolutionRequest withPerformHpo(Boolean performHPO) {
        this.performHPO = performHPO;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipeArn")
    public String recipeArn;
    public CreateSolutionRequest withRecipeArn(String recipeArn) {
        this.recipeArn = recipeArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("solutionConfig")
    public SolutionConfig solutionConfig;
    public CreateSolutionRequest withSolutionConfig(SolutionConfig solutionConfig) {
        this.solutionConfig = solutionConfig;
        return this;
    }
}