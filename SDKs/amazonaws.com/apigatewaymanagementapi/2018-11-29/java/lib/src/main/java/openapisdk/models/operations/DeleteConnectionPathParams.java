package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteConnectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=connectionId")
    public String connectionId;
    public DeleteConnectionPathParams withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
}