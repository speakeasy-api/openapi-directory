package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveAttributesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=application-id")
    public String applicationId;
    public RemoveAttributesPathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attribute-type")
    public String attributeType;
    public RemoveAttributesPathParams withAttributeType(String attributeType) {
        this.attributeType = attributeType;
        return this;
    }
}