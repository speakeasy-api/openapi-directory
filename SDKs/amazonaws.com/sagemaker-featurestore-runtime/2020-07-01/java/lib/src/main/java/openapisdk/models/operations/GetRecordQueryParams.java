package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRecordQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FeatureName")
    public String[] featureName;
    public GetRecordQueryParams withFeatureName(String[] featureName) {
        this.featureName = featureName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RecordIdentifierValueAsString")
    public String recordIdentifierValueAsString;
    public GetRecordQueryParams withRecordIdentifierValueAsString(String recordIdentifierValueAsString) {
        this.recordIdentifierValueAsString = recordIdentifierValueAsString;
        return this;
    }
}