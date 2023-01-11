package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PayrollsAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=deepObject,explode=true,name=filter")
    public openapisdk.models.shared.PayrollsFilter filter;
    public PayrollsAllQueryParams withFilter(openapisdk.models.shared.PayrollsFilter filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=raw")
    public Boolean raw;
    public PayrollsAllQueryParams withRaw(Boolean raw) {
        this.raw = raw;
        return this;
    }
}