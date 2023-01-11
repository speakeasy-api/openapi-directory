package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientPaymentsCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public PatientPaymentsCreateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public PatientPaymentsCreateQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public PatientPaymentsCreateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}