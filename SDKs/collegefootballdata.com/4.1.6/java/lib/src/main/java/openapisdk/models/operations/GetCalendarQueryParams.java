package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCalendarQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetCalendarQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}