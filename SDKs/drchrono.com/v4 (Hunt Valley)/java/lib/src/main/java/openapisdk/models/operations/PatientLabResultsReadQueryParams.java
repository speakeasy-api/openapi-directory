package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientLabResultsReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public PatientLabResultsReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ordering_doctor")
    public Long orderingDoctor;
    public PatientLabResultsReadQueryParams withOrderingDoctor(Long orderingDoctor) {
        this.orderingDoctor = orderingDoctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public PatientLabResultsReadQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public PatientLabResultsReadQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}