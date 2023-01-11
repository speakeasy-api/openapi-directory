package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRecordPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FeatureGroupName")
    public String featureGroupName;
    public DeleteRecordPathParams withFeatureGroupName(String featureGroupName) {
        this.featureGroupName = featureGroupName;
        return this;
    }
}