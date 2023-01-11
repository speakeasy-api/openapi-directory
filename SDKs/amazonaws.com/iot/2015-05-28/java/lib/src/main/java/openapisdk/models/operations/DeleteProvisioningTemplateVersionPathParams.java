package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProvisioningTemplateVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=templateName")
    public String templateName;
    public DeleteProvisioningTemplateVersionPathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionId")
    public Long versionId;
    public DeleteProvisioningTemplateVersionPathParams withVersionId(Long versionId) {
        this.versionId = versionId;
        return this;
    }
}