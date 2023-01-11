package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJsonErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJsonErrors withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJsonErrors withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public String resource;
    public TeamsAddOrUpdateMembershipForUserInOrg422ApplicationJsonErrors withResource(String resource) {
        this.resource = resource;
        return this;
    }
}