package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConnectorQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=currentVersion")
    public String currentVersion;
    public DeleteConnectorQueryParams withCurrentVersion(String currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    }
}