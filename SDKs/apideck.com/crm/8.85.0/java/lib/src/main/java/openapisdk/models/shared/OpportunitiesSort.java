package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class OpportunitiesSort {
    @SpeakeasyMetadata("queryParam:name=by")
    public OpportunitiesSortByEnum by;
    public OpportunitiesSort withBy(OpportunitiesSortByEnum by) {
        this.by = by;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=direction")
    public SortDirectionEnum direction;
    public OpportunitiesSort withDirection(SortDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
}