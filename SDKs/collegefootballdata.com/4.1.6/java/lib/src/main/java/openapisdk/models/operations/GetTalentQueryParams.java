package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTalentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetTalentQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}