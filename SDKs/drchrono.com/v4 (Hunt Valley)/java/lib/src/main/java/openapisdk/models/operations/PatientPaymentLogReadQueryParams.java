package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatientPaymentLogReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public PatientPaymentLogReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=office")
    public Long office;
    public PatientPaymentLogReadQueryParams withOffice(Long office) {
        this.office = office;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public PatientPaymentLogReadQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}