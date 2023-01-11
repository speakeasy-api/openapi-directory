package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InvalidateProjectCacheInput {
    @JsonProperty("projectName")
    public String projectName;
    public InvalidateProjectCacheInput withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
}