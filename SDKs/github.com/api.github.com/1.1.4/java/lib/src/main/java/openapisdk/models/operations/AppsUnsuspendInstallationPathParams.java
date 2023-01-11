package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsUnsuspendInstallationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=installation_id")
    public Long installationId;
    public AppsUnsuspendInstallationPathParams withInstallationId(Long installationId) {
        this.installationId = installationId;
        return this;
    }
}