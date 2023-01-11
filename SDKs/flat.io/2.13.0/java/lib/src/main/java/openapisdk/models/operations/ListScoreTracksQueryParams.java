package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListScoreTracksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=assignment")
    public String assignment;
    public ListScoreTracksQueryParams withAssignment(String assignment) {
        this.assignment = assignment;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=listAutoTrack")
    public Boolean listAutoTrack;
    public ListScoreTracksQueryParams withListAutoTrack(Boolean listAutoTrack) {
        this.listAutoTrack = listAutoTrack;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sharingKey")
    public String sharingKey;
    public ListScoreTracksQueryParams withSharingKey(String sharingKey) {
        this.sharingKey = sharingKey;
        return this;
    }
}