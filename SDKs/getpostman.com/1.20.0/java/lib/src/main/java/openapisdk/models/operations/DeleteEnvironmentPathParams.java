package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEnvironmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environment_uid")
    public String environmentUid;
    public DeleteEnvironmentPathParams withEnvironmentUid(String environmentUid) {
        this.environmentUid = environmentUid;
        return this;
    }
}