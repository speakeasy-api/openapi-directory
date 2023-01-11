package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackagesRestorePackageForAuthenticatedUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public PackagesRestorePackageForAuthenticatedUserQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}