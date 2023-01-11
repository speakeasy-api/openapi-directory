package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEventSourceMappingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UUID")
    public String uuid;
    public DeleteEventSourceMappingPathParams withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}