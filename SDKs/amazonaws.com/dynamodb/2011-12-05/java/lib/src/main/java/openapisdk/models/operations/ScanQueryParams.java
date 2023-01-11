package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScanQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ExclusiveStartKey")
    public String exclusiveStartKey;
    public ScanQueryParams withExclusiveStartKey(String exclusiveStartKey) {
        this.exclusiveStartKey = exclusiveStartKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Limit")
    public String limit;
    public ScanQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
}