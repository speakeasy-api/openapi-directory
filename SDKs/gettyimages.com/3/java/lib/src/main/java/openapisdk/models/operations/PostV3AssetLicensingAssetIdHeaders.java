package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV3AssetLicensingAssetIdHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept-Language")
    public String acceptLanguage;
    public PostV3AssetLicensingAssetIdHeaders withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
}