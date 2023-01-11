package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAttributeGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attributeGroup")
    public String attributeGroup;
    public DeleteAttributeGroupPathParams withAttributeGroup(String attributeGroup) {
        this.attributeGroup = attributeGroup;
        return this;
    }
}