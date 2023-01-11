package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestRoleResponse
 * The <code>TestRoleResponse</code> structure.
**/
public class TestRoleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Messages")
    public String[] messages;
    public TestRoleResponse withMessages(String[] messages) {
        this.messages = messages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Success")
    public String success;
    public TestRoleResponse withSuccess(String success) {
        this.success = success;
        return this;
    }
}