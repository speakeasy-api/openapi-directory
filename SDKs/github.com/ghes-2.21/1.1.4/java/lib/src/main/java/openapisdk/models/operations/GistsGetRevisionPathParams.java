package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GistsGetRevisionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=gist_id")
    public String gistId;
    public GistsGetRevisionPathParams withGistId(String gistId) {
        this.gistId = gistId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=sha")
    public String sha;
    public GistsGetRevisionPathParams withSha(String sha) {
        this.sha = sha;
        return this;
    }
}