package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsListInstallationsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public AppsListInstallationsHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}