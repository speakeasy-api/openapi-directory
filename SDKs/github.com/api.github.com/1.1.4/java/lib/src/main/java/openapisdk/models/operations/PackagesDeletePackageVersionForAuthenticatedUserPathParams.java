package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackagesDeletePackageVersionForAuthenticatedUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_name")
    public String packageName;
    public PackagesDeletePackageVersionForAuthenticatedUserPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_type")
    public openapisdk.models.shared.PackageTypeEnum packageType;
    public PackagesDeletePackageVersionForAuthenticatedUserPathParams withPackageType(openapisdk.models.shared.PackageTypeEnum packageType) {
        this.packageType = packageType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_version_id")
    public Long packageVersionId;
    public PackagesDeletePackageVersionForAuthenticatedUserPathParams withPackageVersionId(Long packageVersionId) {
        this.packageVersionId = packageVersionId;
        return this;
    }
}