package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTemplateVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-name")
    public String templateName;
    public ListTemplateVersionsPathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-type")
    public String templateType;
    public ListTemplateVersionsPathParams withTemplateType(String templateType) {
        this.templateType = templateType;
        return this;
    }
}