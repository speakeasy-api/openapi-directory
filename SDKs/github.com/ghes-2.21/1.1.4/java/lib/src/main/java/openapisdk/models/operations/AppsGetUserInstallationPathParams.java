package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsGetUserInstallationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public AppsGetUserInstallationPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}