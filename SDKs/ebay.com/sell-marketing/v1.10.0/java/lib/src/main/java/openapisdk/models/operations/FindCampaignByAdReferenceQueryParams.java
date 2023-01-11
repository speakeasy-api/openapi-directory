package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FindCampaignByAdReferenceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inventory_reference_id")
    public String inventoryReferenceId;
    public FindCampaignByAdReferenceQueryParams withInventoryReferenceId(String inventoryReferenceId) {
        this.inventoryReferenceId = inventoryReferenceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inventory_reference_type")
    public String inventoryReferenceType;
    public FindCampaignByAdReferenceQueryParams withInventoryReferenceType(String inventoryReferenceType) {
        this.inventoryReferenceType = inventoryReferenceType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=listing_id")
    public String listingId;
    public FindCampaignByAdReferenceQueryParams withListingId(String listingId) {
        this.listingId = listingId;
        return this;
    }
}