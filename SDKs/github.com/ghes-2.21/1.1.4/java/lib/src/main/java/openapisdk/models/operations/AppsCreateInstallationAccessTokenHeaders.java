package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsCreateInstallationAccessTokenHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=accept")
    public String accept;
    public AppsCreateInstallationAccessTokenHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}