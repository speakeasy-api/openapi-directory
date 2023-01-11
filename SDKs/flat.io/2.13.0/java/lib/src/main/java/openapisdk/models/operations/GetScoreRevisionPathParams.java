package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScoreRevisionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=revision")
    public String revision;
    public GetScoreRevisionPathParams withRevision(String revision) {
        this.revision = revision;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public GetScoreRevisionPathParams withScore(String score) {
        this.score = score;
        return this;
    }
}