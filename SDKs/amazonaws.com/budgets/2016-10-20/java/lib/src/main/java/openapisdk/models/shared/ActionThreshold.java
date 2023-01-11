package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ActionThreshold
 *  The trigger threshold of the action. 
**/
public class ActionThreshold {
    @JsonProperty("ActionThresholdType")
    public ThresholdTypeEnum actionThresholdType;
    public ActionThreshold withActionThresholdType(ThresholdTypeEnum actionThresholdType) {
        this.actionThresholdType = actionThresholdType;
        return this;
    }
    @JsonProperty("ActionThresholdValue")
    public Double actionThresholdValue;
    public ActionThreshold withActionThresholdValue(Double actionThresholdValue) {
        this.actionThresholdValue = actionThresholdValue;
        return this;
    }
}