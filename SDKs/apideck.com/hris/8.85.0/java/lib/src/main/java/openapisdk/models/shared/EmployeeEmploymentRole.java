package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EmployeeEmploymentRole {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub_type")
    public EmployeeEmploymentRoleSubTypeEnum subType;
    public EmployeeEmploymentRole withSubType(EmployeeEmploymentRoleSubTypeEnum subType) {
        this.subType = subType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public EmployeeEmploymentRoleTypeEnum type;
    public EmployeeEmploymentRole withType(EmployeeEmploymentRoleTypeEnum type) {
        this.type = type;
        return this;
    }
}