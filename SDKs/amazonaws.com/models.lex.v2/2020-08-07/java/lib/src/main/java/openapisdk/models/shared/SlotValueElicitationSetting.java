package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SlotValueElicitationSetting
 * Settings that you can use for eliciting a slot value.
**/
public class SlotValueElicitationSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultValueSpecification")
    public SlotDefaultValueSpecification defaultValueSpecification;
    public SlotValueElicitationSetting withDefaultValueSpecification(SlotDefaultValueSpecification defaultValueSpecification) {
        this.defaultValueSpecification = defaultValueSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promptSpecification")
    public PromptSpecification promptSpecification;
    public SlotValueElicitationSetting withPromptSpecification(PromptSpecification promptSpecification) {
        this.promptSpecification = promptSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleUtterances")
    public SampleUtterance[] sampleUtterances;
    public SlotValueElicitationSetting withSampleUtterances(SampleUtterance[] sampleUtterances) {
        this.sampleUtterances = sampleUtterances;
        return this;
    }
    @JsonProperty("slotConstraint")
    public SlotConstraintEnum slotConstraint;
    public SlotValueElicitationSetting withSlotConstraint(SlotConstraintEnum slotConstraint) {
        this.slotConstraint = slotConstraint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waitAndContinueSpecification")
    public WaitAndContinueSpecification waitAndContinueSpecification;
    public SlotValueElicitationSetting withWaitAndContinueSpecification(WaitAndContinueSpecification waitAndContinueSpecification) {
        this.waitAndContinueSpecification = waitAndContinueSpecification;
        return this;
    }
}