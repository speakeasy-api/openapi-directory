package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PackagesDeletePackageVersionForOrgPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=org")
    public String org;
    public PackagesDeletePackageVersionForOrgPathParams withOrg(String org) {
        this.org = org;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_name")
    public String packageName;
    public PackagesDeletePackageVersionForOrgPathParams withPackageName(String packageName) {
        this.packageName = packageName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_type")
    public openapisdk.models.shared.PackageTypeEnum packageType;
    public PackagesDeletePackageVersionForOrgPathParams withPackageType(openapisdk.models.shared.PackageTypeEnum packageType) {
        this.packageType = packageType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=package_version_id")
    public Long packageVersionId;
    public PackagesDeletePackageVersionForOrgPathParams withPackageVersionId(Long packageVersionId) {
        this.packageVersionId = packageVersionId;
        return this;
    }
}