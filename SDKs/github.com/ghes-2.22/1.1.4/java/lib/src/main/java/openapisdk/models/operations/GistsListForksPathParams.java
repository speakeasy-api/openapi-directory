package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GistsListForksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gist_id")
    public String gistId;
    public GistsListForksPathParams withGistId(String gistId) {
        this.gistId = gistId;
        return this;
    }
}