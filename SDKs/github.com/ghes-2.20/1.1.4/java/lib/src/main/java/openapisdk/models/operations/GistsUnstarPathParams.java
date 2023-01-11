package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GistsUnstarPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gist_id")
    public String gistId;
    public GistsUnstarPathParams withGistId(String gistId) {
        this.gistId = gistId;
        return this;
    }
}