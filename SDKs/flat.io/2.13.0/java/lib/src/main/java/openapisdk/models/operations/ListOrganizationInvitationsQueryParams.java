package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListOrganizationInvitationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ListOrganizationInvitationsQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next")
    public String next;
    public ListOrganizationInvitationsQueryParams withNext(String next) {
        this.next = next;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=previous")
    public String previous;
    public ListOrganizationInvitationsQueryParams withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=role")
    public ListOrganizationInvitationsRoleEnum role;
    public ListOrganizationInvitationsQueryParams withRole(ListOrganizationInvitationsRoleEnum role) {
        this.role = role;
        return this;
    }
}