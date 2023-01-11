package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class PostMessagesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=auto-unicode")
    public Boolean autoUnicode;
    public PostMessagesQueryParams withAutoUnicode(Boolean autoUnicode) {
        this.autoUnicode = autoUnicode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deduplication-id")
    public Integer deduplicationId;
    public PostMessagesQueryParams withDeduplicationId(Integer deduplicationId) {
        this.deduplicationId = deduplicationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=schedule-date")
    public OffsetDateTime scheduleDate;
    public PostMessagesQueryParams withScheduleDate(OffsetDateTime scheduleDate) {
        this.scheduleDate = scheduleDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=schedule-description")
    public String scheduleDescription;
    public PostMessagesQueryParams withScheduleDescription(String scheduleDescription) {
        this.scheduleDescription = scheduleDescription;
        return this;
    }
}