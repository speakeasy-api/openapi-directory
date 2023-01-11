package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAppRequestBodyCreateApplicationRequest
 * Specifies the display name of an application and the tags to associate with the application.
**/
public class CreateAppRequestBodyCreateApplicationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CreateAppRequestBodyCreateApplicationRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateAppRequestBodyCreateApplicationRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}