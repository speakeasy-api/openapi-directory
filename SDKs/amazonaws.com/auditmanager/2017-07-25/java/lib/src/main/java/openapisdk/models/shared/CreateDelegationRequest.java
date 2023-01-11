package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDelegationRequest
 *  A collection of attributes used to create a delegation for an assessment in Audit Manager. 
**/
public class CreateDelegationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public CreateDelegationRequest withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("controlSetId")
    public String controlSetId;
    public CreateDelegationRequest withControlSetId(String controlSetId) {
        this.controlSetId = controlSetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public CreateDelegationRequest withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleType")
    public RoleTypeEnum roleType;
    public CreateDelegationRequest withRoleType(RoleTypeEnum roleType) {
        this.roleType = roleType;
        return this;
    }
}