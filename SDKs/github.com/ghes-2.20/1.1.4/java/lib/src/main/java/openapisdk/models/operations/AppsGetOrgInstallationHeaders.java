package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsGetOrgInstallationHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public AppsGetOrgInstallationHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}