package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateAttributeGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application")
    public String application;
    public DisassociateAttributeGroupPathParams withApplication(String application) {
        this.application = application;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attributeGroup")
    public String attributeGroup;
    public DisassociateAttributeGroupPathParams withAttributeGroup(String attributeGroup) {
        this.attributeGroup = attributeGroup;
        return this;
    }
}