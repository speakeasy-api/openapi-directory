package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateAttributeGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application")
    public String application;
    public AssociateAttributeGroupPathParams withApplication(String application) {
        this.application = application;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attributeGroup")
    public String attributeGroup;
    public AssociateAttributeGroupPathParams withAttributeGroup(String attributeGroup) {
        this.attributeGroup = attributeGroup;
        return this;
    }
}