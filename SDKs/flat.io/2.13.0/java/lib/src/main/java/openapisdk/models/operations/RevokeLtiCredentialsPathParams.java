package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RevokeLtiCredentialsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=credentials")
    public String credentials;
    public RevokeLtiCredentialsPathParams withCredentials(String credentials) {
        this.credentials = credentials;
        return this;
    }
}