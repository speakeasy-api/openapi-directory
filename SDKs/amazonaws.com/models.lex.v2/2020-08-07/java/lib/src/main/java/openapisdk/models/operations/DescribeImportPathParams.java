package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeImportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=importId")
    public String importId;
    public DescribeImportPathParams withImportId(String importId) {
        this.importId = importId;
        return this;
    }
}