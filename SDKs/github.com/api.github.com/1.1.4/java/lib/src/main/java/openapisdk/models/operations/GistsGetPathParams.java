package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GistsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gist_id")
    public String gistId;
    public GistsGetPathParams withGistId(String gistId) {
        this.gistId = gistId;
        return this;
    }
}