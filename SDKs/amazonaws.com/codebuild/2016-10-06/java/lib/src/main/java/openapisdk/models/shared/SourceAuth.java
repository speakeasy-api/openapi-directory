package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceAuth
 * <p>Information about the authorization settings for CodeBuild to access the source code to be built.</p> <p>This information is for the CodeBuild console's use only. Your code should not get or set this information directly.</p>
**/
public class SourceAuth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public String resource;
    public SourceAuth withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @JsonProperty("type")
    public SourceAuthTypeEnum type;
    public SourceAuth withType(SourceAuthTypeEnum type) {
        this.type = type;
        return this;
    }
}