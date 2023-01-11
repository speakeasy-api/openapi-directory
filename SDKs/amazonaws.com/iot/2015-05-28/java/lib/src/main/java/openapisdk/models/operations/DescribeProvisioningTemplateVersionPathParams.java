package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProvisioningTemplateVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=templateName")
    public String templateName;
    public DescribeProvisioningTemplateVersionPathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionId")
    public Long versionId;
    public DescribeProvisioningTemplateVersionPathParams withVersionId(Long versionId) {
        this.versionId = versionId;
        return this;
    }
}