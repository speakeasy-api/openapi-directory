package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportAddressHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public ExportAddressHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}