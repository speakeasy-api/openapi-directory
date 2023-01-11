package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReplaceRouteTableAssociationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetReplaceRouteTableAssociationActionEnum action;
    public GetReplaceRouteTableAssociationQueryParams withAction(GetReplaceRouteTableAssociationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AssociationId")
    public String associationId;
    public GetReplaceRouteTableAssociationQueryParams withAssociationId(String associationId) {
        this.associationId = associationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetReplaceRouteTableAssociationQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RouteTableId")
    public String routeTableId;
    public GetReplaceRouteTableAssociationQueryParams withRouteTableId(String routeTableId) {
        this.routeTableId = routeTableId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetReplaceRouteTableAssociationVersionEnum version;
    public GetReplaceRouteTableAssociationQueryParams withVersion(GetReplaceRouteTableAssociationVersionEnum version) {
        this.version = version;
        return this;
    }
}