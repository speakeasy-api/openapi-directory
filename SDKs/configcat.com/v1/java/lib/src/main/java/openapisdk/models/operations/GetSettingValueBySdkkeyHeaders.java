package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSettingValueBySdkkeyHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-CONFIGCAT-SDKKEY")
    public String xCONFIGCATSDKKEY;
    public GetSettingValueBySdkkeyHeaders withXConfigcatSdkkey(String xCONFIGCATSDKKEY) {
        this.xCONFIGCATSDKKEY = xCONFIGCATSDKKEY;
        return this;
    }
}