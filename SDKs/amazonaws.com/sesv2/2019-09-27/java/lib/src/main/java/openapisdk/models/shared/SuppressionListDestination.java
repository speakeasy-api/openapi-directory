package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SuppressionListDestination
 * An object that contains details about the action of suppression list.
**/
public class SuppressionListDestination {
    @JsonProperty("SuppressionListImportAction")
    public SuppressionListImportActionEnum suppressionListImportAction;
    public SuppressionListDestination withSuppressionListImportAction(SuppressionListImportActionEnum suppressionListImportAction) {
        this.suppressionListImportAction = suppressionListImportAction;
        return this;
    }
}