package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TestRenderEmailTemplateResponse
 * The following element is returned by the service.
**/
public class TestRenderEmailTemplateResponse {
    @JsonProperty("RenderedTemplate")
    public String renderedTemplate;
    public TestRenderEmailTemplateResponse withRenderedTemplate(String renderedTemplate) {
        this.renderedTemplate = renderedTemplate;
        return this;
    }
}