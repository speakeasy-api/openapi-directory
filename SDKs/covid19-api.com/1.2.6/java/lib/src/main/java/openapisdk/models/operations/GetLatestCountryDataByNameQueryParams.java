package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLatestCountryDataByNameQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetLatestCountryDataByNameFormatEnum format;
    public GetLatestCountryDataByNameQueryParams withFormat(GetLatestCountryDataByNameFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetLatestCountryDataByNameQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}