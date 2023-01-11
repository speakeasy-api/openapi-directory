package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTestGridProjectResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testGridProject")
    public TestGridProject testGridProject;
    public CreateTestGridProjectResult withTestGridProject(TestGridProject testGridProject) {
        this.testGridProject = testGridProject;
        return this;
    }
}