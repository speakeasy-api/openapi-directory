package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListServerCertificatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListServerCertificatesActionEnum action;
    public GetListServerCertificatesQueryParams withAction(GetListServerCertificatesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListServerCertificatesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public Long maxItems;
    public GetListServerCertificatesQueryParams withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PathPrefix")
    public String pathPrefix;
    public GetListServerCertificatesQueryParams withPathPrefix(String pathPrefix) {
        this.pathPrefix = pathPrefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListServerCertificatesVersionEnum version;
    public GetListServerCertificatesQueryParams withVersion(GetListServerCertificatesVersionEnum version) {
        this.version = version;
        return this;
    }
}