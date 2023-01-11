package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CategoriesOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ecosystem_id")
    public String ecosystemId;
    public CategoriesOnePathParams withEcosystemId(String ecosystemId) {
        this.ecosystemId = ecosystemId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CategoriesOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}