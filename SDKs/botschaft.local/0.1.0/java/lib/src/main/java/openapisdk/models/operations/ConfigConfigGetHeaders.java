package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfigConfigGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=authorization")
    public String authorization;
    public ConfigConfigGetHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}