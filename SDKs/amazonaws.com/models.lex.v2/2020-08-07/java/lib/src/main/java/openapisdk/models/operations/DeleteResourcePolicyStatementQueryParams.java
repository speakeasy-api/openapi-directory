package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteResourcePolicyStatementQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expectedRevisionId")
    public String expectedRevisionId;
    public DeleteResourcePolicyStatementQueryParams withExpectedRevisionId(String expectedRevisionId) {
        this.expectedRevisionId = expectedRevisionId;
        return this;
    }
}