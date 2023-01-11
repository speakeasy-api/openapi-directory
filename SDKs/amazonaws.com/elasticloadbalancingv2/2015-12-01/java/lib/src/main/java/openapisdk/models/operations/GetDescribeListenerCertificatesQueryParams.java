package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeListenerCertificatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeListenerCertificatesActionEnum action;
    public GetDescribeListenerCertificatesQueryParams withAction(GetDescribeListenerCertificatesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ListenerArn")
    public String listenerArn;
    public GetDescribeListenerCertificatesQueryParams withListenerArn(String listenerArn) {
        this.listenerArn = listenerArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetDescribeListenerCertificatesQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public GetDescribeListenerCertificatesQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeListenerCertificatesVersionEnum version;
    public GetDescribeListenerCertificatesQueryParams withVersion(GetDescribeListenerCertificatesVersionEnum version) {
        this.version = version;
        return this;
    }
}