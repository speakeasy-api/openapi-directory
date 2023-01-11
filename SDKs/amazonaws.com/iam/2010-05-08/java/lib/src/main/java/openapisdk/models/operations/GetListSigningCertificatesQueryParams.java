package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListSigningCertificatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListSigningCertificatesActionEnum action;
    public GetListSigningCertificatesQueryParams withAction(GetListSigningCertificatesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListSigningCertificatesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListSigningCertificatesQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetListSigningCertificatesQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListSigningCertificatesVersionEnum version;
    public GetListSigningCertificatesQueryParams withVersion(GetListSigningCertificatesVersionEnum version) {
        this.version = version;
        return this;
    }
}