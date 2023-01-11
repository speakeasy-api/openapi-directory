package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackagesGetPackageForOrganizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public PackagesGetPackageForOrganizationPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_name")
    public String packageName;
    public PackagesGetPackageForOrganizationPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_type")
    public openapisdk.models.shared.PackageTypeEnum packageType;
    public PackagesGetPackageForOrganizationPathParams withPackageType(openapisdk.models.shared.PackageTypeEnum packageType) {
        this.packageType = packageType;
        return this;
    }
}