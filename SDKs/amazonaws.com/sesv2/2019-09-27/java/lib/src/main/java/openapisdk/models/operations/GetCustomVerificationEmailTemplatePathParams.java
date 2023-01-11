package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCustomVerificationEmailTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TemplateName")
    public String templateName;
    public GetCustomVerificationEmailTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}