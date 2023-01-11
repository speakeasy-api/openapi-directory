package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListPoliciesGrantingServiceAccessQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListPoliciesGrantingServiceAccessActionEnum action;
    public GetListPoliciesGrantingServiceAccessQueryParams withAction(GetListPoliciesGrantingServiceAccessActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Arn")
    public String arn;
    public GetListPoliciesGrantingServiceAccessQueryParams withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Marker")
    public String marker;
    public GetListPoliciesGrantingServiceAccessQueryParams withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServiceNamespaces")
    public String[] serviceNamespaces;
    public GetListPoliciesGrantingServiceAccessQueryParams withServiceNamespaces(String[] serviceNamespaces) {
        this.serviceNamespaces = serviceNamespaces;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListPoliciesGrantingServiceAccessVersionEnum version;
    public GetListPoliciesGrantingServiceAccessQueryParams withVersion(GetListPoliciesGrantingServiceAccessVersionEnum version) {
        this.version = version;
        return this;
    }
}