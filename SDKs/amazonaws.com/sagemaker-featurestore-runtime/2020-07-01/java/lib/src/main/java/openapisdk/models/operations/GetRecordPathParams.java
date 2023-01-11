package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRecordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FeatureGroupName")
    public String featureGroupName;
    public GetRecordPathParams withFeatureGroupName(String featureGroupName) {
        this.featureGroupName = featureGroupName;
        return this;
    }
}