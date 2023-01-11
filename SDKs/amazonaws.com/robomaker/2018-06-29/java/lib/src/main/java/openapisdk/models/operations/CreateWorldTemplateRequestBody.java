package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWorldTemplateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public CreateWorldTemplateRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateWorldTemplateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateWorldTemplateRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateBody")
    public String templateBody;
    public CreateWorldTemplateRequestBody withTemplateBody(String templateBody) {
        this.templateBody = templateBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateLocation")
    public CreateWorldTemplateRequestBodyTemplateLocation templateLocation;
    public CreateWorldTemplateRequestBody withTemplateLocation(CreateWorldTemplateRequestBodyTemplateLocation templateLocation) {
        this.templateLocation = templateLocation;
        return this;
    }
}