package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListFailedIpNsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public ListFailedIpNsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;
    public ListFailedIpNsHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}