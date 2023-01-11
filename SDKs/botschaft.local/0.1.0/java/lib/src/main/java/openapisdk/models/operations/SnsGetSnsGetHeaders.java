package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SnsGetSnsGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=authorization")
    public String authorization;
    public SnsGetSnsGetHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}