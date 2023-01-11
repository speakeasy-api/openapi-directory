package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetTransactionsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}