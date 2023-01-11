package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestResult
 * Show each group result.
**/
public class TestResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groups")
    public GroupResult[] groups;
    public TestResult withGroups(GroupResult[] groups) {
        this.groups = groups;
        return this;
    }
}