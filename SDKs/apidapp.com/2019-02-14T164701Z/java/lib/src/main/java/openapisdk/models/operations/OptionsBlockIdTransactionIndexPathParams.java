package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OptionsBlockIdTransactionIndexPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public OptionsBlockIdTransactionIndexPathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=index")
    public String index;
    public OptionsBlockIdTransactionIndexPathParams withIndex(String index) {
        this.index = index;
        return this;
    }
}