package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackagesGetPackageForAuthenticatedUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_name")
    public String packageName;
    public PackagesGetPackageForAuthenticatedUserPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_type")
    public openapisdk.models.shared.PackageTypeEnum packageType;
    public PackagesGetPackageForAuthenticatedUserPathParams withPackageType(openapisdk.models.shared.PackageTypeEnum packageType) {
        this.packageType = packageType;
        return this;
    }
}