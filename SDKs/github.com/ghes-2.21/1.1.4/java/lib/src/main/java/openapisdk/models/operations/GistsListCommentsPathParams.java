package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GistsListCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gist_id")
    public String gistId;
    public GistsListCommentsPathParams withGistId(String gistId) {
        this.gistId = gistId;
        return this;
    }
}