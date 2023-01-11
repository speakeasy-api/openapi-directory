package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TestRenderEmailTemplateRequestBody {
    @JsonProperty("TemplateData")
    public String templateData;
    public TestRenderEmailTemplateRequestBody withTemplateData(String templateData) {
        this.templateData = templateData;
        return this;
    }
}