package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDailyReportTotalsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public String date;
    public GetDailyReportTotalsQueryParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date-format")
    public GetDailyReportTotalsDateFormatEnum dateFormat;
    public GetDailyReportTotalsQueryParams withDateFormat(GetDailyReportTotalsDateFormatEnum dateFormat) {
        this.dateFormat = dateFormat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetDailyReportTotalsFormatEnum format;
    public GetDailyReportTotalsQueryParams withFormat(GetDailyReportTotalsFormatEnum format) {
        this.format = format;
        return this;
    }
}