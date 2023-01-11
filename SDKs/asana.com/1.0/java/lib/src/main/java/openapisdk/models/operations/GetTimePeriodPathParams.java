package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTimePeriodPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=time_period_gid")
    public String timePeriodGid;
    public GetTimePeriodPathParams withTimePeriodGid(String timePeriodGid) {
        this.timePeriodGid = timePeriodGid;
        return this;
    }
}