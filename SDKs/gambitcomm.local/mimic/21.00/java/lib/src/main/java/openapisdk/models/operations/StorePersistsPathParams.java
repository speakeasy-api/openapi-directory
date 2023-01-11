package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StorePersistsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=var")
    public String var;
    public StorePersistsPathParams withVar(String var) {
        this.var = var;
        return this;
    }
}