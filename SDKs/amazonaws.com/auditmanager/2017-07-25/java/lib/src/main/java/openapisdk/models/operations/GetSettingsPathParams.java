package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attribute")
    public GetSettingsAttributeEnum attribute;
    public GetSettingsPathParams withAttribute(GetSettingsAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
}