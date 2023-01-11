package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DocumentsUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public DocumentsUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public DocumentsUpdateQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public DocumentsUpdateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}