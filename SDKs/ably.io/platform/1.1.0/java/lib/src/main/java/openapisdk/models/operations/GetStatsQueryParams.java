package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.FilterDirectionEnum direction;
    public GetStatsQueryParams withDirection(openapisdk.models.shared.FilterDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public String end;
    public GetStatsQueryParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public GetStatsQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetStatsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public GetStatsQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unit")
    public openapisdk.models.shared.FilterDirectionEnum1 unit;
    public GetStatsQueryParams withUnit(openapisdk.models.shared.FilterDirectionEnum1 unit) {
        this.unit = unit;
        return this;
    }
}