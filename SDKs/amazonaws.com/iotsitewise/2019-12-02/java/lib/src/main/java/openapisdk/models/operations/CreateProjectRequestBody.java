package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProjectRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateProjectRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("portalId")
    public String portalId;
    public CreateProjectRequestBody withPortalId(String portalId) {
        this.portalId = portalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectDescription")
    public String projectDescription;
    public CreateProjectRequestBody withProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
        return this;
    }
    @JsonProperty("projectName")
    public String projectName;
    public CreateProjectRequestBody withProjectName(String projectName) {
        this.projectName = projectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateProjectRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}