package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsGetInstallationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public AppsGetInstallationHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}