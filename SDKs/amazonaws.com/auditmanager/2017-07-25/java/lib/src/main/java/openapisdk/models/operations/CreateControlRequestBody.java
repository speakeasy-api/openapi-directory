package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateControlRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionPlanInstructions")
    public String actionPlanInstructions;
    public CreateControlRequestBody withActionPlanInstructions(String actionPlanInstructions) {
        this.actionPlanInstructions = actionPlanInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionPlanTitle")
    public String actionPlanTitle;
    public CreateControlRequestBody withActionPlanTitle(String actionPlanTitle) {
        this.actionPlanTitle = actionPlanTitle;
        return this;
    }
    @JsonProperty("controlMappingSources")
    public openapisdk.models.shared.CreateControlMappingSource[] controlMappingSources;
    public CreateControlRequestBody withControlMappingSources(openapisdk.models.shared.CreateControlMappingSource[] controlMappingSources) {
        this.controlMappingSources = controlMappingSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateControlRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateControlRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateControlRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testingInformation")
    public String testingInformation;
    public CreateControlRequestBody withTestingInformation(String testingInformation) {
        this.testingInformation = testingInformation;
        return this;
    }
}