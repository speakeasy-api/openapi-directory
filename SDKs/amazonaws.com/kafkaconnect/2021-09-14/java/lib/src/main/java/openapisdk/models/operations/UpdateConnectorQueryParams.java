package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConnectorQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currentVersion")
    public String currentVersion;
    public UpdateConnectorQueryParams withCurrentVersion(String currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    }
}