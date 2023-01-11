package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResendFailedIpnHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public ResendFailedIpnHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}