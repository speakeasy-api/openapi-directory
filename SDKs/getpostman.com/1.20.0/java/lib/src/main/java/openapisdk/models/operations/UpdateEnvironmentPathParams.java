package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEnvironmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environment_uid")
    public String environmentUid;
    public UpdateEnvironmentPathParams withEnvironmentUid(String environmentUid) {
        this.environmentUid = environmentUid;
        return this;
    }
}