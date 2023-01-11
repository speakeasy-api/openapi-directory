package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReplaceSettingValueBySdkkeyHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-CONFIGCAT-SDKKEY")
    public String xCONFIGCATSDKKEY;
    public ReplaceSettingValueBySdkkeyHeaders withXConfigcatSdkkey(String xCONFIGCATSDKKEY) {
        this.xCONFIGCATSDKKEY = xCONFIGCATSDKKEY;
        return this;
    }
}