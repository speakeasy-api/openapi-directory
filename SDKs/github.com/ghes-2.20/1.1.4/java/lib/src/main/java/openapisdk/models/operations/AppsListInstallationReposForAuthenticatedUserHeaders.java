package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsListInstallationReposForAuthenticatedUserHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public AppsListInstallationReposForAuthenticatedUserHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}