package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateSlotRequestBodyValueElicitationSetting
 * Settings that you can use for eliciting a slot value.
**/
public class CreateSlotRequestBodyValueElicitationSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultValueSpecification")
    public openapisdk.models.shared.SlotDefaultValueSpecification defaultValueSpecification;
    public CreateSlotRequestBodyValueElicitationSetting withDefaultValueSpecification(openapisdk.models.shared.SlotDefaultValueSpecification defaultValueSpecification) {
        this.defaultValueSpecification = defaultValueSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promptSpecification")
    public openapisdk.models.shared.PromptSpecification promptSpecification;
    public CreateSlotRequestBodyValueElicitationSetting withPromptSpecification(openapisdk.models.shared.PromptSpecification promptSpecification) {
        this.promptSpecification = promptSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleUtterances")
    public openapisdk.models.shared.SampleUtterance[] sampleUtterances;
    public CreateSlotRequestBodyValueElicitationSetting withSampleUtterances(openapisdk.models.shared.SampleUtterance[] sampleUtterances) {
        this.sampleUtterances = sampleUtterances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slotConstraint")
    public openapisdk.models.shared.SlotConstraintEnum slotConstraint;
    public CreateSlotRequestBodyValueElicitationSetting withSlotConstraint(openapisdk.models.shared.SlotConstraintEnum slotConstraint) {
        this.slotConstraint = slotConstraint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waitAndContinueSpecification")
    public openapisdk.models.shared.WaitAndContinueSpecification waitAndContinueSpecification;
    public CreateSlotRequestBodyValueElicitationSetting withWaitAndContinueSpecification(openapisdk.models.shared.WaitAndContinueSpecification waitAndContinueSpecification) {
        this.waitAndContinueSpecification = waitAndContinueSpecification;
        return this;
    }
}