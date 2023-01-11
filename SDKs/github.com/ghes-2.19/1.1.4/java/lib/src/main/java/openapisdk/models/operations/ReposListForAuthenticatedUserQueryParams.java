package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class ReposListForAuthenticatedUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=affiliation")
    public String affiliation;
    public ReposListForAuthenticatedUserQueryParams withAffiliation(String affiliation) {
        this.affiliation = affiliation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public OffsetDateTime before;
    public ReposListForAuthenticatedUserQueryParams withBefore(OffsetDateTime before) {
        this.before = before;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public ReposListForAuthenticatedUserDirectionEnum direction;
    public ReposListForAuthenticatedUserQueryParams withDirection(ReposListForAuthenticatedUserDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ReposListForAuthenticatedUserQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ReposListForAuthenticatedUserQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=since")
    public OffsetDateTime since;
    public ReposListForAuthenticatedUserQueryParams withSince(OffsetDateTime since) {
        this.since = since;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public ReposListForAuthenticatedUserSortEnum sort;
    public ReposListForAuthenticatedUserQueryParams withSort(ReposListForAuthenticatedUserSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public ReposListForAuthenticatedUserTypeEnum type;
    public ReposListForAuthenticatedUserQueryParams withType(ReposListForAuthenticatedUserTypeEnum type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=visibility")
    public ReposListForAuthenticatedUserVisibilityEnum visibility;
    public ReposListForAuthenticatedUserQueryParams withVisibility(ReposListForAuthenticatedUserVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}