package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAttributeGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attributeGroup")
    public String attributeGroup;
    public UpdateAttributeGroupPathParams withAttributeGroup(String attributeGroup) {
        this.attributeGroup = attributeGroup;
        return this;
    }
}