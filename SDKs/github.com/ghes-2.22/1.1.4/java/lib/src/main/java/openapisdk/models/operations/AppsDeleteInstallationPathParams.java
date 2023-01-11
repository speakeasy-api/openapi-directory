package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsDeleteInstallationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=installation_id")
    public Long installationId;
    public AppsDeleteInstallationPathParams withInstallationId(Long installationId) {
        this.installationId = installationId;
        return this;
    }
}