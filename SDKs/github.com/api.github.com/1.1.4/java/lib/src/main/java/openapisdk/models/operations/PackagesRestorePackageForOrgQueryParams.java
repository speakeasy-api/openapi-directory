package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackagesRestorePackageForOrgQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public PackagesRestorePackageForOrgQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}