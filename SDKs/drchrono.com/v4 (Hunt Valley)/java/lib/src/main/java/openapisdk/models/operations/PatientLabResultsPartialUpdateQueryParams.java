package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientLabResultsPartialUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public PatientLabResultsPartialUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ordering_doctor")
    public Long orderingDoctor;
    public PatientLabResultsPartialUpdateQueryParams withOrderingDoctor(Long orderingDoctor) {
        this.orderingDoctor = orderingDoctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public PatientLabResultsPartialUpdateQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public PatientLabResultsPartialUpdateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}