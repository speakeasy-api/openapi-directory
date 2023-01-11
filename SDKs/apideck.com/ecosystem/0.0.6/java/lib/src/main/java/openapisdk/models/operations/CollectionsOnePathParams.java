package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectionsOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ecosystem_id")
    public String ecosystemId;
    public CollectionsOnePathParams withEcosystemId(String ecosystemId) {
        this.ecosystemId = ecosystemId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CollectionsOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}