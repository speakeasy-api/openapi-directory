package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GistsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gist_id")
    public String gistId;
    public GistsUpdatePathParams withGistId(String gistId) {
        this.gistId = gistId;
        return this;
    }
}