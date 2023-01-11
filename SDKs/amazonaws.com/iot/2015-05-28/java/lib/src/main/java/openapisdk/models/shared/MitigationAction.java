package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MitigationAction
 * Describes which changes should be applied as part of a mitigation action.
**/
public class MitigationAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionParams")
    public MitigationActionParams actionParams;
    public MitigationAction withActionParams(MitigationActionParams actionParams) {
        this.actionParams = actionParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public MitigationAction withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MitigationAction withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public MitigationAction withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}