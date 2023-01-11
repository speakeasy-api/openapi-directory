package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FindingAction
 * Provides information about an action that occurred for a resource and produced a policy finding.
**/
public class FindingAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionType")
    public FindingActionTypeEnum actionType;
    public FindingAction withActionType(FindingActionTypeEnum actionType) {
        this.actionType = actionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiCallDetails")
    public ApiCallDetails apiCallDetails;
    public FindingAction withApiCallDetails(ApiCallDetails apiCallDetails) {
        this.apiCallDetails = apiCallDetails;
        return this;
    }
}