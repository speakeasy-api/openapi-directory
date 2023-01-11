package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GistsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gist_id")
    public String gistId;
    public GistsDeletePathParams withGistId(String gistId) {
        this.gistId = gistId;
        return this;
    }
}