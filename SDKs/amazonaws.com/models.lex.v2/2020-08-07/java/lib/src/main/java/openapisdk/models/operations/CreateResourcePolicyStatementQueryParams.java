package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateResourcePolicyStatementQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expectedRevisionId")
    public String expectedRevisionId;
    public CreateResourcePolicyStatementQueryParams withExpectedRevisionId(String expectedRevisionId) {
        this.expectedRevisionId = expectedRevisionId;
        return this;
    }
}