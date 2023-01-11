package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SrcSearchlyApiV1ControllersSimilarityBySongQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=song_id")
    public Long songId;
    public SrcSearchlyApiV1ControllersSimilarityBySongQueryParams withSongId(Long songId) {
        this.songId = songId;
        return this;
    }
}