package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectsCreateForAuthenticatedUserRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public ProjectsCreateForAuthenticatedUserRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ProjectsCreateForAuthenticatedUserRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}