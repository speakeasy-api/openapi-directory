package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAuditFindingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=findingId")
    public String findingId;
    public DescribeAuditFindingPathParams withFindingId(String findingId) {
        this.findingId = findingId;
        return this;
    }
}