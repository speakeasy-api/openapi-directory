package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchAspectIdFullsearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=e")
    public Long e;
    public GetSearchAspectIdFullsearchQueryParams withE(Long e) {
        this.e = e;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lFrag")
    public Long lFrag;
    public GetSearchAspectIdFullsearchQueryParams withLFrag(Long lFrag) {
        this.lFrag = lFrag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nFrag")
    public Long nFrag;
    public GetSearchAspectIdFullsearchQueryParams withNFrag(Long nFrag) {
        this.nFrag = nFrag;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetSearchAspectIdFullsearchQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=s")
    public String s;
    public GetSearchAspectIdFullsearchQueryParams withS(String s) {
        this.s = s;
        return this;
    }
}