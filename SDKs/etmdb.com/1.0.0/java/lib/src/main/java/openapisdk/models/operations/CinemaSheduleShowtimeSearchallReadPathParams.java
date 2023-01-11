package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CinemaSheduleShowtimeSearchallReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=param")
    public String param;
    public CinemaSheduleShowtimeSearchallReadPathParams withParam(String param) {
        this.param = param;
        return this;
    }
}