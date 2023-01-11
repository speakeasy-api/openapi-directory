package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDailyReportAllCountriesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public String date;
    public GetDailyReportAllCountriesQueryParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date-format")
    public GetDailyReportAllCountriesDateFormatEnum dateFormat;
    public GetDailyReportAllCountriesQueryParams withDateFormat(GetDailyReportAllCountriesDateFormatEnum dateFormat) {
        this.dateFormat = dateFormat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetDailyReportAllCountriesFormatEnum format;
    public GetDailyReportAllCountriesQueryParams withFormat(GetDailyReportAllCountriesFormatEnum format) {
        this.format = format;
        return this;
    }
}