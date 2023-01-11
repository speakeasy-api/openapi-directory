package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoreExistsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=var")
    public String var;
    public StoreExistsPathParams withVar(String var) {
        this.var = var;
        return this;
    }
}