package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFactOnthisdayBornQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=day")
    public String day;
    public GetFactOnthisdayBornQueryParams withDay(String day) {
        this.day = day;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=month")
    public String month;
    public GetFactOnthisdayBornQueryParams withMonth(String month) {
        this.month = month;
        return this;
    }
}