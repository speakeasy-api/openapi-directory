package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientVaccineRecordsPartialUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cvx_code")
    public String cvxCode;
    public PatientVaccineRecordsPartialUpdateQueryParams withCvxCode(String cvxCode) {
        this.cvxCode = cvxCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public PatientVaccineRecordsPartialUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public PatientVaccineRecordsPartialUpdateQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public PatientVaccineRecordsPartialUpdateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}