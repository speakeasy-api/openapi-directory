package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CategoryListingsAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ecosystem_id")
    public String ecosystemId;
    public CategoryListingsAllPathParams withEcosystemId(String ecosystemId) {
        this.ecosystemId = ecosystemId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CategoryListingsAllPathParams withId(String id) {
        this.id = id;
        return this;
    }
}