package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAdvancedBoxScoreQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gameId")
    public Long gameId;
    public GetAdvancedBoxScoreQueryParams withGameId(Long gameId) {
        this.gameId = gameId;
        return this;
    }
}