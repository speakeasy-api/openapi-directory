package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBlockHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public GetBlockHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}