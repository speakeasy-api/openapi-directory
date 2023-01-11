package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProjectsUpdateColumnRequestBody {
    @JsonProperty("name")
    public String name;
    public ProjectsUpdateColumnRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}