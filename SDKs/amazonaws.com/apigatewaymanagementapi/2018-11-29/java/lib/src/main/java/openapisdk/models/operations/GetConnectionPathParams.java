package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConnectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=connectionId")
    public String connectionId;
    public GetConnectionPathParams withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
}