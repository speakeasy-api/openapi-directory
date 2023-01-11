package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPresenceHistoryOfChannelQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.FilterDirectionEnum direction;
    public GetPresenceHistoryOfChannelQueryParams withDirection(openapisdk.models.shared.FilterDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end")
    public String end;
    public GetPresenceHistoryOfChannelQueryParams withEnd(String end) {
        this.end = end;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public openapisdk.models.shared.ResponseFormatEnum format;
    public GetPresenceHistoryOfChannelQueryParams withFormat(openapisdk.models.shared.ResponseFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetPresenceHistoryOfChannelQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public GetPresenceHistoryOfChannelQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
}