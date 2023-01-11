package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptionsBlockIdTransactionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public OptionsBlockIdTransactionPathParams withId(String id) {
        this.id = id;
        return this;
    }
}