package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLatestAllCountriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetLatestAllCountriesFormatEnum format;
    public GetLatestAllCountriesQueryParams withFormat(GetLatestAllCountriesFormatEnum format) {
        this.format = format;
        return this;
    }
}