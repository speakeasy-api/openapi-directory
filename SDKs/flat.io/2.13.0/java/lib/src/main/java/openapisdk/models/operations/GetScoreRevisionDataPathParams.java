package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScoreRevisionDataPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=format")
    public GetScoreRevisionDataFormatEnum format;
    public GetScoreRevisionDataPathParams withFormat(GetScoreRevisionDataFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=revision")
    public String revision;
    public GetScoreRevisionDataPathParams withRevision(String revision) {
        this.revision = revision;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public GetScoreRevisionDataPathParams withScore(String score) {
        this.score = score;
        return this;
    }
}