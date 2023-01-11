package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListServerCertificatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListServerCertificatesActionEnum action;
    public PostListServerCertificatesQueryParams withAction(PostListServerCertificatesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListServerCertificatesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListServerCertificatesQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListServerCertificatesVersionEnum version;
    public PostListServerCertificatesQueryParams withVersion(PostListServerCertificatesVersionEnum version) {
        this.version = version;
        return this;
    }
}