package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsGetUserInstallationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public AppsGetUserInstallationHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}