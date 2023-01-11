package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAttributeGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attributeGroup")
    public String attributeGroup;
    public GetAttributeGroupPathParams withAttributeGroup(String attributeGroup) {
        this.attributeGroup = attributeGroup;
        return this;
    }
}