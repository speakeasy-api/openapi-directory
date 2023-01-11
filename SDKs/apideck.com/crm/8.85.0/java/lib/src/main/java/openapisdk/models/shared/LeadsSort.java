package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class LeadsSort {
    @SpeakeasyMetadata("queryParam:name=by")
    public LeadsSortByEnum by;
    public LeadsSort withBy(LeadsSortByEnum by) {
        this.by = by;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=direction")
    public SortDirectionEnum direction;
    public LeadsSort withDirection(SortDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
}