package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutRecordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FeatureGroupName")
    public String featureGroupName;
    public PutRecordPathParams withFeatureGroupName(String featureGroupName) {
        this.featureGroupName = featureGroupName;
        return this;
    }
}