package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDataSourcesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public ListDataSourcesPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}