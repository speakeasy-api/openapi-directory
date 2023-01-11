package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackagesDeletePackageForAuthenticatedUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_name")
    public String packageName;
    public PackagesDeletePackageForAuthenticatedUserPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_type")
    public openapisdk.models.shared.PackageTypeEnum packageType;
    public PackagesDeletePackageForAuthenticatedUserPathParams withPackageType(openapisdk.models.shared.PackageTypeEnum packageType) {
        this.packageType = packageType;
        return this;
    }
}