package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuthInfo
 * A collection of authorization information.
**/
public class AuthInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionType")
    public ActionTypeEnum actionType;
    public AuthInfo withActionType(ActionTypeEnum actionType) {
        this.actionType = actionType;
        return this;
    }
    @JsonProperty("resources")
    public String[] resources;
    public AuthInfo withResources(String[] resources) {
        this.resources = resources;
        return this;
    }
}