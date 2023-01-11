package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListSigningCertificatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListSigningCertificatesActionEnum action;
    public PostListSigningCertificatesQueryParams withAction(PostListSigningCertificatesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostListSigningCertificatesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxItems")
    public String maxItems;
    public PostListSigningCertificatesQueryParams withMaxItems(String maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListSigningCertificatesVersionEnum version;
    public PostListSigningCertificatesQueryParams withVersion(PostListSigningCertificatesVersionEnum version) {
        this.version = version;
        return this;
    }
}