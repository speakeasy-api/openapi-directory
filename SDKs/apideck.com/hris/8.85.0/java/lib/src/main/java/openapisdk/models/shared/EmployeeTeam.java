package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmployeeTeam
 * The team the user is currently in.
**/
public class EmployeeTeam {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public EmployeeTeam withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EmployeeTeam withName(String name) {
        this.name = name;
        return this;
    }
}