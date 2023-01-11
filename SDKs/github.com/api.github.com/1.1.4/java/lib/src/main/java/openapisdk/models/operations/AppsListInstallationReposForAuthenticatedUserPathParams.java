package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsListInstallationReposForAuthenticatedUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=installation_id")
    public Long installationId;
    public AppsListInstallationReposForAuthenticatedUserPathParams withInstallationId(Long installationId) {
        this.installationId = installationId;
        return this;
    }
}