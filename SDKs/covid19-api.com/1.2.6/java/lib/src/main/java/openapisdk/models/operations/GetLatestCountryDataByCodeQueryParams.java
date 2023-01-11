package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLatestCountryDataByCodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=code")
    public String code;
    public GetLatestCountryDataByCodeQueryParams withCode(String code) {
        this.code = code;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetLatestCountryDataByCodeFormatEnum format;
    public GetLatestCountryDataByCodeQueryParams withFormat(GetLatestCountryDataByCodeFormatEnum format) {
        this.format = format;
        return this;
    }
}