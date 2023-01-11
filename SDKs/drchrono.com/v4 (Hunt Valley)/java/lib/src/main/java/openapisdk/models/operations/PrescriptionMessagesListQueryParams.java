package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrescriptionMessagesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public PrescriptionMessagesListQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public PrescriptionMessagesListQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public PrescriptionMessagesListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parent_message")
    public Long parentMessage;
    public PrescriptionMessagesListQueryParams withParentMessage(Long parentMessage) {
        this.parentMessage = parentMessage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public PrescriptionMessagesListQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public PrescriptionMessagesListQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}