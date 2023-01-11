package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SnsPostSnsPostHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=authorization")
    public String authorization;
    public SnsPostSnsPostHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}