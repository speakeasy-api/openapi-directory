package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeExportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=exportId")
    public String exportId;
    public DescribeExportPathParams withExportId(String exportId) {
        this.exportId = exportId;
        return this;
    }
}