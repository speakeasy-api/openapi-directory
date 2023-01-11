package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoreGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=var")
    public String var;
    public StoreGetPathParams withVar(String var) {
        this.var = var;
        return this;
    }
}