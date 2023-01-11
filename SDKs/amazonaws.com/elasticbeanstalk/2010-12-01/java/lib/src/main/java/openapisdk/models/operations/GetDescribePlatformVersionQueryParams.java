package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribePlatformVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribePlatformVersionActionEnum action;
    public GetDescribePlatformVersionQueryParams withAction(GetDescribePlatformVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PlatformArn")
    public String platformArn;
    public GetDescribePlatformVersionQueryParams withPlatformArn(String platformArn) {
        this.platformArn = platformArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribePlatformVersionVersionEnum version;
    public GetDescribePlatformVersionQueryParams withVersion(GetDescribePlatformVersionVersionEnum version) {
        this.version = version;
        return this;
    }
}