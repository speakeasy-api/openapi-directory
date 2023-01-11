package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ImportationGetProductSampleCustomColumnValuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=columnId")
    public String columnId;
    public ImportationGetProductSampleCustomColumnValuePathParams withColumnId(String columnId) {
        this.columnId = columnId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=executionId")
    public String executionId;
    public ImportationGetProductSampleCustomColumnValuePathParams withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productSampleIndex")
    public Integer productSampleIndex;
    public ImportationGetProductSampleCustomColumnValuePathParams withProductSampleIndex(Integer productSampleIndex) {
        this.productSampleIndex = productSampleIndex;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=storeId")
    public String storeId;
    public ImportationGetProductSampleCustomColumnValuePathParams withStoreId(String storeId) {
        this.storeId = storeId;
        return this;
    }
}