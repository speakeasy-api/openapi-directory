package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=e")
    public Float e;
    public ListQueryParams withE(Float e) {
        this.e = e;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=n")
    public Float n;
    public ListQueryParams withN(Float n) {
        this.n = n;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=s")
    public Float s;
    public ListQueryParams withS(Float s) {
        this.s = s;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=w")
    public Float w;
    public ListQueryParams withW(Float w) {
        this.w = w;
        return this;
    }
}