package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsListInstallationsForAuthenticatedUserHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public AppsListInstallationsForAuthenticatedUserHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}