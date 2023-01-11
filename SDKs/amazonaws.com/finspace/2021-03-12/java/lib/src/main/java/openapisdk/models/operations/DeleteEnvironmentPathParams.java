package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEnvironmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environmentId")
    public String environmentId;
    public DeleteEnvironmentPathParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
}