package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestRenderEmailTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TemplateName")
    public String templateName;
    public TestRenderEmailTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}