package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePlaceIndexPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IndexName")
    public String indexName;
    public DeletePlaceIndexPathParams withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
}