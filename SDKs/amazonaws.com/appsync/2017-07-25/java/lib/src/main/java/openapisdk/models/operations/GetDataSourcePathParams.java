package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDataSourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetDataSourcePathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GetDataSourcePathParams withName(String name) {
        this.name = name;
        return this;
    }
}