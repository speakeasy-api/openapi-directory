package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplicantsOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public ApplicantsOneQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}