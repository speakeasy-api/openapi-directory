package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeletePlatformVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeletePlatformVersionActionEnum action;
    public GetDeletePlatformVersionQueryParams withAction(GetDeletePlatformVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PlatformArn")
    public String platformArn;
    public GetDeletePlatformVersionQueryParams withPlatformArn(String platformArn) {
        this.platformArn = platformArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeletePlatformVersionVersionEnum version;
    public GetDeletePlatformVersionQueryParams withVersion(GetDeletePlatformVersionVersionEnum version) {
        this.version = version;
        return this;
    }
}