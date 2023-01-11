package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GistsCreateCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gist_id")
    public String gistId;
    public GistsCreateCommentPathParams withGistId(String gistId) {
        this.gistId = gistId;
        return this;
    }
}