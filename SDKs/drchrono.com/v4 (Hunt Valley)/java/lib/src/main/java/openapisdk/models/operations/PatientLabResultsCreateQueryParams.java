package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientLabResultsCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public PatientLabResultsCreateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ordering_doctor")
    public Long orderingDoctor;
    public PatientLabResultsCreateQueryParams withOrderingDoctor(Long orderingDoctor) {
        this.orderingDoctor = orderingDoctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public PatientLabResultsCreateQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public PatientLabResultsCreateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}