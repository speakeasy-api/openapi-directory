package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWinProbabilityDataQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=gameId")
    public Long gameId;
    public GetWinProbabilityDataQueryParams withGameId(Long gameId) {
        this.gameId = gameId;
        return this;
    }
}