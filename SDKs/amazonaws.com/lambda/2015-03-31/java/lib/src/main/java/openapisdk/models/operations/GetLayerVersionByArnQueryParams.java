package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLayerVersionByArnQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Arn")
    public String arn;
    public GetLayerVersionByArnQueryParams withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=find")
    public GetLayerVersionByArnFindEnum find;
    public GetLayerVersionByArnQueryParams withFind(GetLayerVersionByArnFindEnum find) {
        this.find = find;
        return this;
    }
}