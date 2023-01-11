package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveEventSourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UUID")
    public String uuid;
    public RemoveEventSourcePathParams withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}