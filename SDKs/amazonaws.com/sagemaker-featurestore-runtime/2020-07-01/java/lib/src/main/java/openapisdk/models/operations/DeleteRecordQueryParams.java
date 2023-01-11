package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRecordQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EventTime")
    public String eventTime;
    public DeleteRecordQueryParams withEventTime(String eventTime) {
        this.eventTime = eventTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RecordIdentifierValueAsString")
    public String recordIdentifierValueAsString;
    public DeleteRecordQueryParams withRecordIdentifierValueAsString(String recordIdentifierValueAsString) {
        this.recordIdentifierValueAsString = recordIdentifierValueAsString;
        return this;
    }
}