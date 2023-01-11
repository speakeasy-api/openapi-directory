package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDailyReportByCountryCodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=code")
    public String code;
    public GetDailyReportByCountryCodeQueryParams withCode(String code) {
        this.code = code;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public String date;
    public GetDailyReportByCountryCodeQueryParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date-format")
    public GetDailyReportByCountryCodeDateFormatEnum dateFormat;
    public GetDailyReportByCountryCodeQueryParams withDateFormat(GetDailyReportByCountryCodeDateFormatEnum dateFormat) {
        this.dateFormat = dateFormat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetDailyReportByCountryCodeFormatEnum format;
    public GetDailyReportByCountryCodeQueryParams withFormat(GetDailyReportByCountryCodeFormatEnum format) {
        this.format = format;
        return this;
    }
}