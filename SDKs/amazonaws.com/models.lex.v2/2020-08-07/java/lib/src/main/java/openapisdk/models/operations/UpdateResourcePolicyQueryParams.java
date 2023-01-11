package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateResourcePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=expectedRevisionId")
    public String expectedRevisionId;
    public UpdateResourcePolicyQueryParams withExpectedRevisionId(String expectedRevisionId) {
        this.expectedRevisionId = expectedRevisionId;
        return this;
    }
}