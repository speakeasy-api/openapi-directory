package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventSourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=UUID")
    public String uuid;
    public GetEventSourcePathParams withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}