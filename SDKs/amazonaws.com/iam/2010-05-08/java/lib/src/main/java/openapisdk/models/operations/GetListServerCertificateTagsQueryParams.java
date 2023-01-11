package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListServerCertificateTagsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListServerCertificateTagsActionEnum action;
    public GetListServerCertificateTagsQueryParams withAction(GetListServerCertificateTagsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListServerCertificateTagsQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListServerCertificateTagsQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServerCertificateName")
    public String serverCertificateName;
    public GetListServerCertificateTagsQueryParams withServerCertificateName(String serverCertificateName) {
        this.serverCertificateName = serverCertificateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListServerCertificateTagsVersionEnum version;
    public GetListServerCertificateTagsQueryParams withVersion(GetListServerCertificateTagsVersionEnum version) {
        this.version = version;
        return this;
    }
}