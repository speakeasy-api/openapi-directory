package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCloudFrontOriginAccessIdentityConfig20190326PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public GetCloudFrontOriginAccessIdentityConfig20190326PathParams withId(String id) {
        this.id = id;
        return this;
    }
}