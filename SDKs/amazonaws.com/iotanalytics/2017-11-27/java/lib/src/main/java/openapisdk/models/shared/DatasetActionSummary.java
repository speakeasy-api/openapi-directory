package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatasetActionSummary
 * Information about the action that automatically creates the dataset's contents.
**/
public class DatasetActionSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionName")
    public String actionName;
    public DatasetActionSummary withActionName(String actionName) {
        this.actionName = actionName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionType")
    public DatasetActionTypeEnum actionType;
    public DatasetActionSummary withActionType(DatasetActionTypeEnum actionType) {
        this.actionType = actionType;
        return this;
    }
}