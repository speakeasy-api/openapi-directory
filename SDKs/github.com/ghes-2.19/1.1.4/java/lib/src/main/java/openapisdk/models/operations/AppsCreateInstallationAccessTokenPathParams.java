package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsCreateInstallationAccessTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=installation_id")
    public Long installationId;
    public AppsCreateInstallationAccessTokenPathParams withInstallationId(Long installationId) {
        this.installationId = installationId;
        return this;
    }
}