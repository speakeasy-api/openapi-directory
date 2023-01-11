package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostToConnectionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=connectionId")
    public String connectionId;
    public PostToConnectionPathParams withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
}