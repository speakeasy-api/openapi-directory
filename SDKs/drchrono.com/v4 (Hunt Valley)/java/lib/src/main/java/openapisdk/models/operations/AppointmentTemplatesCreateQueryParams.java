package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppointmentTemplatesCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public AppointmentTemplatesCreateQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=office")
    public Long office;
    public AppointmentTemplatesCreateQueryParams withOffice(Long office) {
        this.office = office;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=profile")
    public Long profile;
    public AppointmentTemplatesCreateQueryParams withProfile(Long profile) {
        this.profile = profile;
        return this;
    }
}