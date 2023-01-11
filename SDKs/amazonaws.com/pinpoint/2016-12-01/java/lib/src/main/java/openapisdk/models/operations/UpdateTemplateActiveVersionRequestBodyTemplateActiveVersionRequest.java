package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest
 * Specifies which version of a message template to use as the active version of the template.
**/
public class UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public UpdateTemplateActiveVersionRequestBodyTemplateActiveVersionRequest withVersion(String version) {
        this.version = version;
        return this;
    }
}