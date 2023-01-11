package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPublicKey20181105PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public GetPublicKey20181105PathParams withId(String id) {
        this.id = id;
        return this;
    }
}