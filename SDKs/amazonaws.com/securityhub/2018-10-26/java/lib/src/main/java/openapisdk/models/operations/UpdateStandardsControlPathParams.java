package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStandardsControlPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=StandardsControlArn")
    public String standardsControlArn;
    public UpdateStandardsControlPathParams withStandardsControlArn(String standardsControlArn) {
        this.standardsControlArn = standardsControlArn;
        return this;
    }
}