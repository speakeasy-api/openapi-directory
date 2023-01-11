package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchPlaceIndexForPositionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IndexName")
    public String indexName;
    public SearchPlaceIndexForPositionPathParams withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
}