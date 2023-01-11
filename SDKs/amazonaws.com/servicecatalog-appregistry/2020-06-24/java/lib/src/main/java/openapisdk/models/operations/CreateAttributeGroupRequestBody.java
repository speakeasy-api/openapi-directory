package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAttributeGroupRequestBody {
    @JsonProperty("attributes")
    public String attributes;
    public CreateAttributeGroupRequestBody withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateAttributeGroupRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateAttributeGroupRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateAttributeGroupRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateAttributeGroupRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}