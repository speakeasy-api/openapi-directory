package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCloudFrontOriginAccessIdentityConfig20180618PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public GetCloudFrontOriginAccessIdentityConfig20180618PathParams withId(String id) {
        this.id = id;
        return this;
    }
}