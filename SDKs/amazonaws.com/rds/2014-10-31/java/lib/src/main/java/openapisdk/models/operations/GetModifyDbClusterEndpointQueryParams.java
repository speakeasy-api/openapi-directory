package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyDbClusterEndpointQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyDbClusterEndpointActionEnum action;
    public GetModifyDbClusterEndpointQueryParams withAction(GetModifyDbClusterEndpointActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBClusterEndpointIdentifier")
    public String dbClusterEndpointIdentifier;
    public GetModifyDbClusterEndpointQueryParams withDbClusterEndpointIdentifier(String dbClusterEndpointIdentifier) {
        this.dbClusterEndpointIdentifier = dbClusterEndpointIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndpointType")
    public String endpointType;
    public GetModifyDbClusterEndpointQueryParams withEndpointType(String endpointType) {
        this.endpointType = endpointType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExcludedMembers")
    public String[] excludedMembers;
    public GetModifyDbClusterEndpointQueryParams withExcludedMembers(String[] excludedMembers) {
        this.excludedMembers = excludedMembers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StaticMembers")
    public String[] staticMembers;
    public GetModifyDbClusterEndpointQueryParams withStaticMembers(String[] staticMembers) {
        this.staticMembers = staticMembers;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyDbClusterEndpointVersionEnum version;
    public GetModifyDbClusterEndpointQueryParams withVersion(GetModifyDbClusterEndpointVersionEnum version) {
        this.version = version;
        return this;
    }
}