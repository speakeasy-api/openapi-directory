package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CategoriesAllPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ecosystem_id")
    public String ecosystemId;
    public CategoriesAllPathParams withEcosystemId(String ecosystemId) {
        this.ecosystemId = ecosystemId;
        return this;
    }
}