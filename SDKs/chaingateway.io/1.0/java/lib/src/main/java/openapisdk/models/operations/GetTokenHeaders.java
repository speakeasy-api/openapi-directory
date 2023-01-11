package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTokenHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetTokenHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}