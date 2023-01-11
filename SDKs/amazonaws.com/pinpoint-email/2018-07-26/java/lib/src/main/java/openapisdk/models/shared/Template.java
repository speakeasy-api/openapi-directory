package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Template {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateArn")
    public String templateArn;
    public Template withTemplateArn(String templateArn) {
        this.templateArn = templateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateData")
    public String templateData;
    public Template withTemplateData(String templateData) {
        this.templateData = templateData;
        return this;
    }
}