package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackagesGetPackageVersionForUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_name")
    public String packageName;
    public PackagesGetPackageVersionForUserPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_type")
    public openapisdk.models.shared.PackageTypeEnum packageType;
    public PackagesGetPackageVersionForUserPathParams withPackageType(openapisdk.models.shared.PackageTypeEnum packageType) {
        this.packageType = packageType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_version_id")
    public Long packageVersionId;
    public PackagesGetPackageVersionForUserPathParams withPackageVersionId(Long packageVersionId) {
        this.packageVersionId = packageVersionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=username")
    public String username;
    public PackagesGetPackageVersionForUserPathParams withUsername(String username) {
        this.username = username;
        return this;
    }
}