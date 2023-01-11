package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListOrganizationUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.SortDirectionEnum direction;
    public ListOrganizationUsersQueryParams withDirection(openapisdk.models.shared.SortDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String[] group;
    public ListOrganizationUsersQueryParams withGroup(String[] group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=licenseExpirationDate")
    public String[] licenseExpirationDate;
    public ListOrganizationUsersQueryParams withLicenseExpirationDate(String[] licenseExpirationDate) {
        this.licenseExpirationDate = licenseExpirationDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListOrganizationUsersQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next")
    public String next;
    public ListOrganizationUsersQueryParams withNext(String next) {
        this.next = next;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=noActiveLicense")
    public Boolean noActiveLicense;
    public ListOrganizationUsersQueryParams withNoActiveLicense(Boolean noActiveLicense) {
        this.noActiveLicense = noActiveLicense;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onlyIds")
    public Boolean onlyIds;
    public ListOrganizationUsersQueryParams withOnlyIds(Boolean onlyIds) {
        this.onlyIds = onlyIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=previous")
    public String previous;
    public ListOrganizationUsersQueryParams withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public ListOrganizationUsersQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=role")
    public openapisdk.models.shared.RoleEnum[] role;
    public ListOrganizationUsersQueryParams withRole(openapisdk.models.shared.RoleEnum[] role) {
        this.role = role;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public ListOrganizationUsersQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
}