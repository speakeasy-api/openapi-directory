package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemovePermissionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=FunctionName")
    public String functionName;
    public RemovePermissionPathParams withFunctionName(String functionName) {
        this.functionName = functionName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=StatementId")
    public String statementId;
    public RemovePermissionPathParams withStatementId(String statementId) {
        this.statementId = statementId;
        return this;
    }
}