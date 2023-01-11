package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetRadAnalystQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=analyst_id")
    public Integer[] analystId;
    public GetRadAnalystQueryParams withAnalystId(Integer[] analystId) {
        this.analystId = analystId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=analyst_short_id")
    public Integer[] analystShortId;
    public GetRadAnalystQueryParams withAnalystShortId(Integer[] analystShortId) {
        this.analystShortId = analystShortId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetRadAnalystQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_id")
    public String[] committeeId;
    public GetRadAnalystQueryParams withCommitteeId(String[] committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String[] email;
    public GetRadAnalystQueryParams withEmail(String[] email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_assignment_update_date")
    public LocalDate maxAssignmentUpdateDate;
    public GetRadAnalystQueryParams withMaxAssignmentUpdateDate(LocalDate maxAssignmentUpdateDate) {
        this.maxAssignmentUpdateDate = maxAssignmentUpdateDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_assignment_update_date")
    public LocalDate minAssignmentUpdateDate;
    public GetRadAnalystQueryParams withMinAssignmentUpdateDate(LocalDate minAssignmentUpdateDate) {
        this.minAssignmentUpdateDate = minAssignmentUpdateDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String[] name;
    public GetRadAnalystQueryParams withName(String[] name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetRadAnalystQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetRadAnalystQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetRadAnalystQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetRadAnalystQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetRadAnalystQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetRadAnalystQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=telephone_ext")
    public Integer[] telephoneExt;
    public GetRadAnalystQueryParams withTelephoneExt(Integer[] telephoneExt) {
        this.telephoneExt = telephoneExt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=title")
    public String[] title;
    public GetRadAnalystQueryParams withTitle(String[] title) {
        this.title = title;
        return this;
    }
}