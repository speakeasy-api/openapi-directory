package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFbsTeamsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetFbsTeamsQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}