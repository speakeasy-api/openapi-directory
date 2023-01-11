package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppointmentTemplatesUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public AppointmentTemplatesUpdateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=office")
    public Long office;
    public AppointmentTemplatesUpdateQueryParams withOffice(Long office) {
        this.office = office;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=profile")
    public Long profile;
    public AppointmentTemplatesUpdateQueryParams withProfile(Long profile) {
        this.profile = profile;
        return this;
    }
}