package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListComponentVersionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=arn")
    public String arn;
    public ListComponentVersionsPathParams withArn(String arn) {
        this.arn = arn;
        return this;
    }
}