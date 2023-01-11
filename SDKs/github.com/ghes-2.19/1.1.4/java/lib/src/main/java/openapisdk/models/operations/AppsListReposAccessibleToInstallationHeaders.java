package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsListReposAccessibleToInstallationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public AppsListReposAccessibleToInstallationHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}