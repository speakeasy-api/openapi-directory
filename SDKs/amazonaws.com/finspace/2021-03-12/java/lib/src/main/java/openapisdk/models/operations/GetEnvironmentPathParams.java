package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnvironmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environmentId")
    public String environmentId;
    public GetEnvironmentPathParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
}