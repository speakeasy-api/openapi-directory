package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTemplateActiveVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-name")
    public String templateName;
    public UpdateTemplateActiveVersionPathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-type")
    public String templateType;
    public UpdateTemplateActiveVersionPathParams withTemplateType(String templateType) {
        this.templateType = templateType;
        return this;
    }
}