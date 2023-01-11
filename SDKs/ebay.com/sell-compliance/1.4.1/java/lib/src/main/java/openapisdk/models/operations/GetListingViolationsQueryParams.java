package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingViolationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=compliance_type")
    public String complianceType;
    public GetListingViolationsQueryParams withComplianceType(String complianceType) {
        this.complianceType = complianceType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetListingViolationsQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public GetListingViolationsQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=listing_id")
    public String listingId;
    public GetListingViolationsQueryParams withListingId(String listingId) {
        this.listingId = listingId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public GetListingViolationsQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}