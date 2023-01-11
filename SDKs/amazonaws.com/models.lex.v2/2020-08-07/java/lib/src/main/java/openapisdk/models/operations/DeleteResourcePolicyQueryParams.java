package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteResourcePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expectedRevisionId")
    public String expectedRevisionId;
    public DeleteResourcePolicyQueryParams withExpectedRevisionId(String expectedRevisionId) {
        this.expectedRevisionId = expectedRevisionId;
        return this;
    }
}