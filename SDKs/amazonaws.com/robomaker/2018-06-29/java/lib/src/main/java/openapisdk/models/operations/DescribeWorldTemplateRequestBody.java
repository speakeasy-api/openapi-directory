package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeWorldTemplateRequestBody {
    @JsonProperty("template")
    public String template;
    public DescribeWorldTemplateRequestBody withTemplate(String template) {
        this.template = template;
        return this;
    }
}