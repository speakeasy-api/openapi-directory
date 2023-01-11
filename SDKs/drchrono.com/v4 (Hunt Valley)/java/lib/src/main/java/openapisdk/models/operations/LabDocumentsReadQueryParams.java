package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LabDocumentsReadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=doctor")
    public Long doctor;
    public LabDocumentsReadQueryParams withDoctor(Long doctor) {
        this.doctor = doctor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public String since;
    public LabDocumentsReadQueryParams withSince(String since) {
        this.since = since;
        return this;
    }
}