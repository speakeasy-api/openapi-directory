package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeApiAuth {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeApiAuth withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}