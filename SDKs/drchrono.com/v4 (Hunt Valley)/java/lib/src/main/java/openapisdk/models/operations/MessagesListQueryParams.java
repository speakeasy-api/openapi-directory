package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MessagesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public MessagesListQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public MessagesListQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=owner")
    public Long owner;
    public MessagesListQueryParams withOwner(Long owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public MessagesListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public MessagesListQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=received_since")
    public String receivedSince;
    public MessagesListQueryParams withReceivedSince(String receivedSince) {
        this.receivedSince = receivedSince;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=responsible_user")
    public Long responsibleUser;
    public MessagesListQueryParams withResponsibleUser(Long responsibleUser) {
        this.responsibleUser = responsibleUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public MessagesListQueryParams withType(String type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updated_since")
    public String updatedSince;
    public MessagesListQueryParams withUpdatedSince(String updatedSince) {
        this.updatedSince = updatedSince;
        return this;
    }
}