package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProfileObjectTypeTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TemplateId")
    public String templateId;
    public GetProfileObjectTypeTemplatePathParams withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
}