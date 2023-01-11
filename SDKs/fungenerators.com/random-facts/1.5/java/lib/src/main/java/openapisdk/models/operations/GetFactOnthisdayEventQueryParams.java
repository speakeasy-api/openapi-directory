package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFactOnthisdayEventQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=day")
    public String day;
    public GetFactOnthisdayEventQueryParams withDay(String day) {
        this.day = day;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=month")
    public String month;
    public GetFactOnthisdayEventQueryParams withMonth(String month) {
        this.month = month;
        return this;
    }
}