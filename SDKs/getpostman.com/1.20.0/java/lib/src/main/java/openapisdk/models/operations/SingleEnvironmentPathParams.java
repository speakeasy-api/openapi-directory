package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SingleEnvironmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=environment_uid")
    public String environmentUid;
    public SingleEnvironmentPathParams withEnvironmentUid(String environmentUid) {
        this.environmentUid = environmentUid;
        return this;
    }
}