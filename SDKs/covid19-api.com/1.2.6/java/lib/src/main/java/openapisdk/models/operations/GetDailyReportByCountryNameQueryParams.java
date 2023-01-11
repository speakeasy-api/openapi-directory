package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDailyReportByCountryNameQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date")
    public String date;
    public GetDailyReportByCountryNameQueryParams withDate(String date) {
        this.date = date;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date-format")
    public GetDailyReportByCountryNameDateFormatEnum dateFormat;
    public GetDailyReportByCountryNameQueryParams withDateFormat(GetDailyReportByCountryNameDateFormatEnum dateFormat) {
        this.dateFormat = dateFormat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetDailyReportByCountryNameFormatEnum format;
    public GetDailyReportByCountryNameQueryParams withFormat(GetDailyReportByCountryNameFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetDailyReportByCountryNameQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}