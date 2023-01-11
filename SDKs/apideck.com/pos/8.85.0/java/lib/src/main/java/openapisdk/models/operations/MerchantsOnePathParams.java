package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MerchantsOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public MerchantsOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}