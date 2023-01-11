package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWorldTemplateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateWorldTemplateRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("template")
    public String template;
    public UpdateWorldTemplateRequestBody withTemplate(String template) {
        this.template = template;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateBody")
    public String templateBody;
    public UpdateWorldTemplateRequestBody withTemplateBody(String templateBody) {
        this.templateBody = templateBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateLocation")
    public UpdateWorldTemplateRequestBodyTemplateLocation templateLocation;
    public UpdateWorldTemplateRequestBody withTemplateLocation(UpdateWorldTemplateRequestBodyTemplateLocation templateLocation) {
        this.templateLocation = templateLocation;
        return this;
    }
}