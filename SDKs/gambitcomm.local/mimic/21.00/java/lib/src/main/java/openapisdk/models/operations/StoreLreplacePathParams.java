package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoreLreplacePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=index")
    public Integer index;
    public StoreLreplacePathParams withIndex(Integer index) {
        this.index = index;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=var")
    public String var;
    public StoreLreplacePathParams withVar(String var) {
        this.var = var;
        return this;
    }
}