package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeIndexPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=indexName")
    public String indexName;
    public DescribeIndexPathParams withIndexName(String indexName) {
        this.indexName = indexName;
        return this;
    }
}