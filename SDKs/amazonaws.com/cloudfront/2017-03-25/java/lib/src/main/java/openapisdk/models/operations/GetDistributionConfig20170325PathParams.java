package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistributionConfig20170325PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Id")
    public String id;
    public GetDistributionConfig20170325PathParams withId(String id) {
        this.id = id;
        return this;
    }
}