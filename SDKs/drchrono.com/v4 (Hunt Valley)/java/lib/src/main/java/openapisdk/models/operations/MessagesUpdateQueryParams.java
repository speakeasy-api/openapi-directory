package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MessagesUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public MessagesUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=owner")
    public Long owner;
    public MessagesUpdateQueryParams withOwner(Long owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public MessagesUpdateQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=received_since")
    public String receivedSince;
    public MessagesUpdateQueryParams withReceivedSince(String receivedSince) {
        this.receivedSince = receivedSince;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=responsible_user")
    public Long responsibleUser;
    public MessagesUpdateQueryParams withResponsibleUser(Long responsibleUser) {
        this.responsibleUser = responsibleUser;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public MessagesUpdateQueryParams withType(String type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updated_since")
    public String updatedSince;
    public MessagesUpdateQueryParams withUpdatedSince(String updatedSince) {
        this.updatedSince = updatedSince;
        return this;
    }
}