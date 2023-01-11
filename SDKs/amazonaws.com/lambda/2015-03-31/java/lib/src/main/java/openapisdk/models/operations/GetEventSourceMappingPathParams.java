package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventSourceMappingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UUID")
    public String uuid;
    public GetEventSourceMappingPathParams withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}