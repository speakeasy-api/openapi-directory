package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OfficesAddExamRoomQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public OfficesAddExamRoomQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
}