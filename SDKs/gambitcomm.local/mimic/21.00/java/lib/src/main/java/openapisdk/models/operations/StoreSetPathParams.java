package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StoreSetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=persist")
    public Integer persist;
    public StoreSetPathParams withPersist(Integer persist) {
        this.persist = persist;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=var")
    public String var;
    public StoreSetPathParams withVar(String var) {
        this.var = var;
        return this;
    }
}