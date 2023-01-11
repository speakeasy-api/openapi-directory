package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackagesGetPackageForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_name")
    public String packageName;
    public PackagesGetPackageForUserPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_type")
    public openapisdk.models.shared.PackageTypeEnum packageType;
    public PackagesGetPackageForUserPathParams withPackageType(openapisdk.models.shared.PackageTypeEnum packageType) {
        this.packageType = packageType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public PackagesGetPackageForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}