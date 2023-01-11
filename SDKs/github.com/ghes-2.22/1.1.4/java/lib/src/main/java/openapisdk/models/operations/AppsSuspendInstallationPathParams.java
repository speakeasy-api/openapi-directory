package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsSuspendInstallationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=installation_id")
    public Long installationId;
    public AppsSuspendInstallationPathParams withInstallationId(Long installationId) {
        this.installationId = installationId;
        return this;
    }
}