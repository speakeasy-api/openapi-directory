package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CountOrgaUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String[] group;
    public CountOrgaUsersQueryParams withGroup(String[] group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=noActiveLicense")
    public Boolean noActiveLicense;
    public CountOrgaUsersQueryParams withNoActiveLicense(Boolean noActiveLicense) {
        this.noActiveLicense = noActiveLicense;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public CountOrgaUsersQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=role")
    public openapisdk.models.shared.RoleEnum[] role;
    public CountOrgaUsersQueryParams withRole(openapisdk.models.shared.RoleEnum[] role) {
        this.role = role;
        return this;
    }
}