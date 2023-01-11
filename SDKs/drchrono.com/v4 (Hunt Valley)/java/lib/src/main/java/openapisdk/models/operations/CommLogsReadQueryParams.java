package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommLogsReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public CommLogsReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public CommLogsReadQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public CommLogsReadQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}