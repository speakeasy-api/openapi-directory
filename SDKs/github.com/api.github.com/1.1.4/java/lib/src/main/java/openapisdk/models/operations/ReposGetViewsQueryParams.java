package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposGetViewsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per")
    public openapisdk.models.shared.PerEnum per;
    public ReposGetViewsQueryParams withPer(openapisdk.models.shared.PerEnum per) {
        this.per = per;
        return this;
    }
}