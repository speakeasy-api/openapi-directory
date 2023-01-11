package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteScoreTrackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=score")
    public String score;
    public DeleteScoreTrackPathParams withScore(String score) {
        this.score = score;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=track")
    public String track;
    public DeleteScoreTrackPathParams withTrack(String track) {
        this.track = track;
        return this;
    }
}