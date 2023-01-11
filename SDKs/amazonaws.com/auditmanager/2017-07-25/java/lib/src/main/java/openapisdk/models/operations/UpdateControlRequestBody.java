package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateControlRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionPlanInstructions")
    public String actionPlanInstructions;
    public UpdateControlRequestBody withActionPlanInstructions(String actionPlanInstructions) {
        this.actionPlanInstructions = actionPlanInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionPlanTitle")
    public String actionPlanTitle;
    public UpdateControlRequestBody withActionPlanTitle(String actionPlanTitle) {
        this.actionPlanTitle = actionPlanTitle;
        return this;
    }
    @JsonProperty("controlMappingSources")
    public openapisdk.models.shared.ControlMappingSource[] controlMappingSources;
    public UpdateControlRequestBody withControlMappingSources(openapisdk.models.shared.ControlMappingSource[] controlMappingSources) {
        this.controlMappingSources = controlMappingSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateControlRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UpdateControlRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testingInformation")
    public String testingInformation;
    public UpdateControlRequestBody withTestingInformation(String testingInformation) {
        this.testingInformation = testingInformation;
        return this;
    }
}