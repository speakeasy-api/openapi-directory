package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePlaceIndexPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IndexName")
    public String indexName;
    public UpdatePlaceIndexPathParams withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
}