package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CinemaScheduleSearchallReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=param")
    public String param;
    public CinemaScheduleSearchallReadPathParams withParam(String param) {
        this.param = param;
        return this;
    }
}