package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListBuiltInIntentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=localeId")
    public String localeId;
    public ListBuiltInIntentsPathParams withLocaleId(String localeId) {
        this.localeId = localeId;
        return this;
    }
}