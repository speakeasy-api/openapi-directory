package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBuiltInSlotTypesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=localeId")
    public String localeId;
    public ListBuiltInSlotTypesPathParams withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
}