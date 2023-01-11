package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutOrdersIdStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PutOrdersIdStatusPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}