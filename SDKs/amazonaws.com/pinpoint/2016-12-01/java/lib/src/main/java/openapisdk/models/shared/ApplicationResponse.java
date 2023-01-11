package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationResponse
 * Provides information about an application.
**/
public class ApplicationResponse {
    @JsonProperty("Arn")
    public String arn;
    public ApplicationResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonProperty("Id")
    public String id;
    public ApplicationResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public ApplicationResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public ApplicationResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}