package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoreUnsetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=var")
    public String var;
    public StoreUnsetPathParams withVar(String var) {
        this.var = var;
        return this;
    }
}