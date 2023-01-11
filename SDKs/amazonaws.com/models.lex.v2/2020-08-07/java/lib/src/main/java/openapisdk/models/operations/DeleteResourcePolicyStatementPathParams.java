package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteResourcePolicyStatementPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=resourceArn")
    public String resourceArn;
    public DeleteResourcePolicyStatementPathParams withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=statementId")
    public String statementId;
    public DeleteResourcePolicyStatementPathParams withStatementId(String statementId) {
        this.statementId = statementId;
        return this;
    }
}