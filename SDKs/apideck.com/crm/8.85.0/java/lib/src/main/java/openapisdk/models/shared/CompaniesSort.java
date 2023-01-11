package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class CompaniesSort {
    @SpeakeasyMetadata("queryParam:name=by")
    public CompaniesSortByEnum by;
    public CompaniesSort withBy(CompaniesSortByEnum by) {
        this.by = by;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=direction")
    public SortDirectionEnum direction;
    public CompaniesSort withDirection(SortDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
}