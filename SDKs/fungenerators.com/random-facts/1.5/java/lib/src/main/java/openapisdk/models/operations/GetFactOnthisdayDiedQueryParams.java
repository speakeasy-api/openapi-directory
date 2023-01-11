package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFactOnthisdayDiedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=day")
    public String day;
    public GetFactOnthisdayDiedQueryParams withDay(String day) {
        this.day = day;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=month")
    public String month;
    public GetFactOnthisdayDiedQueryParams withMonth(String month) {
        this.month = month;
        return this;
    }
}