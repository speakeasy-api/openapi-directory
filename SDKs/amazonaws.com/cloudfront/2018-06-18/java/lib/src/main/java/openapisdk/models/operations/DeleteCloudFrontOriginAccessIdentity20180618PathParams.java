package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCloudFrontOriginAccessIdentity20180618PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public DeleteCloudFrontOriginAccessIdentity20180618PathParams withId(String id) {
        this.id = id;
        return this;
    }
}