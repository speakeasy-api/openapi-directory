package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposGetClonesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per")
    public openapisdk.models.shared.PerEnum per;
    public ReposGetClonesQueryParams withPer(openapisdk.models.shared.PerEnum per) {
        this.per = per;
        return this;
    }
}