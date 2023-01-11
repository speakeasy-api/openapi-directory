package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsGetRepoInstallationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public AppsGetRepoInstallationHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}