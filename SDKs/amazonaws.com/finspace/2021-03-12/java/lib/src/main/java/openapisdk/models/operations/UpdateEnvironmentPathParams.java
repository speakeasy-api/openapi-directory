package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEnvironmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environmentId")
    public String environmentId;
    public UpdateEnvironmentPathParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
}