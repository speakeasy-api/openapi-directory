package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPredictedPointsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=distance")
    public Long distance;
    public GetPredictedPointsQueryParams withDistance(Long distance) {
        this.distance = distance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=down")
    public Long down;
    public GetPredictedPointsQueryParams withDown(Long down) {
        this.down = down;
        return this;
    }
}