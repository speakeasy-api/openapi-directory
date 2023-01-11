package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListOfCountriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetListOfCountriesFormatEnum format;
    public GetListOfCountriesQueryParams withFormat(GetListOfCountriesFormatEnum format) {
        this.format = format;
        return this;
    }
}