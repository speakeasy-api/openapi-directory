package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAdsByInventoryReferenceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inventory_reference_id")
    public String inventoryReferenceId;
    public GetAdsByInventoryReferenceQueryParams withInventoryReferenceId(String inventoryReferenceId) {
        this.inventoryReferenceId = inventoryReferenceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=inventory_reference_type")
    public String inventoryReferenceType;
    public GetAdsByInventoryReferenceQueryParams withInventoryReferenceType(String inventoryReferenceType) {
        this.inventoryReferenceType = inventoryReferenceType;
        return this;
    }
}