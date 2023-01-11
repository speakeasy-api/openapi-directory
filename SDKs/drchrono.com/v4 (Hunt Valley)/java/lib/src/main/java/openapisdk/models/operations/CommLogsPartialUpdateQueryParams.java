package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommLogsPartialUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public CommLogsPartialUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=patient")
    public Long patient;
    public CommLogsPartialUpdateQueryParams withPatient(Long patient) {
        this.patient = patient;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public CommLogsPartialUpdateQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}