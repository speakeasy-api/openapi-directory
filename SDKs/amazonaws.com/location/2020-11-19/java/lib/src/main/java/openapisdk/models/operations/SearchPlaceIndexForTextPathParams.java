package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchPlaceIndexForTextPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IndexName")
    public String indexName;
    public SearchPlaceIndexForTextPathParams withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
}