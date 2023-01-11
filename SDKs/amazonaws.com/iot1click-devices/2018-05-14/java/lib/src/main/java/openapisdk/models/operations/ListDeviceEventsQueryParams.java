package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ListDeviceEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromTimeStamp")
    public OffsetDateTime fromTimeStamp;
    public ListDeviceEventsQueryParams withFromTimeStamp(OffsetDateTime fromTimeStamp) {
        this.fromTimeStamp = fromTimeStamp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListDeviceEventsQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListDeviceEventsQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toTimeStamp")
    public OffsetDateTime toTimeStamp;
    public ListDeviceEventsQueryParams withToTimeStamp(OffsetDateTime toTimeStamp) {
        this.toTimeStamp = toTimeStamp;
        return this;
    }
}