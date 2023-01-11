package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeProvisioningTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=templateName")
    public String templateName;
    public DescribeProvisioningTemplatePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}