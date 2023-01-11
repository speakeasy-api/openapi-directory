package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppSessionsByTimeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=app_id")
    public String appId;
    public AppSessionsByTimeQueryParams withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ending_at")
    public String endingAt;
    public AppSessionsByTimeQueryParams withEndingAt(String endingAt) {
        this.endingAt = endingAt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=length")
    public String length;
    public AppSessionsByTimeQueryParams withLength(String length) {
        this.length = length;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=segment_id")
    public String segmentId;
    public AppSessionsByTimeQueryParams withSegmentId(String segmentId) {
        this.segmentId = segmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unit")
    public String unit;
    public AppSessionsByTimeQueryParams withUnit(String unit) {
        this.unit = unit;
        return this;
    }
}