package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEventSourceMappingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UUID")
    public String uuid;
    public UpdateEventSourceMappingPathParams withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}