package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePlaceIndexPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IndexName")
    public String indexName;
    public DescribePlaceIndexPathParams withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
}