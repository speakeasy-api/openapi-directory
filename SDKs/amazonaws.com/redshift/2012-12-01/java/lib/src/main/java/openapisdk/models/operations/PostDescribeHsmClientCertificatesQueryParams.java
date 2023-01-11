package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeHsmClientCertificatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeHsmClientCertificatesActionEnum action;
    public PostDescribeHsmClientCertificatesQueryParams withAction(PostDescribeHsmClientCertificatesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public PostDescribeHsmClientCertificatesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MaxRecords")
    public String maxRecords;
    public PostDescribeHsmClientCertificatesQueryParams withMaxRecords(String maxRecords) {
        this.maxRecords = maxRecords;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeHsmClientCertificatesVersionEnum version;
    public PostDescribeHsmClientCertificatesQueryParams withVersion(PostDescribeHsmClientCertificatesVersionEnum version) {
        this.version = version;
        return this;
    }
}