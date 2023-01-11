package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSettingValueBySdkkeyHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=X-CONFIGCAT-SDKKEY")
    public String xCONFIGCATSDKKEY;
    public UpdateSettingValueBySdkkeyHeaders withXConfigcatSdkkey(String xCONFIGCATSDKKEY) {
        this.xCONFIGCATSDKKEY = xCONFIGCATSDKKEY;
        return this;
    }
}