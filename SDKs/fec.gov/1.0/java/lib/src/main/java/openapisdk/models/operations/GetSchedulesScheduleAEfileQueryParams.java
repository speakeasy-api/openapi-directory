package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetSchedulesScheduleAEfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetSchedulesScheduleAEfileQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_id")
    public String[] committeeId;
    public GetSchedulesScheduleAEfileQueryParams withCommitteeId(String[] committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_city")
    public String[] contributorCity;
    public GetSchedulesScheduleAEfileQueryParams withContributorCity(String[] contributorCity) {
        this.contributorCity = contributorCity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_employer")
    public String[] contributorEmployer;
    public GetSchedulesScheduleAEfileQueryParams withContributorEmployer(String[] contributorEmployer) {
        this.contributorEmployer = contributorEmployer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_name")
    public String[] contributorName;
    public GetSchedulesScheduleAEfileQueryParams withContributorName(String[] contributorName) {
        this.contributorName = contributorName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_occupation")
    public String[] contributorOccupation;
    public GetSchedulesScheduleAEfileQueryParams withContributorOccupation(String[] contributorOccupation) {
        this.contributorOccupation = contributorOccupation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contributor_state")
    public String[] contributorState;
    public GetSchedulesScheduleAEfileQueryParams withContributorState(String[] contributorState) {
        this.contributorState = contributorState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=image_number")
    public String[] imageNumber;
    public GetSchedulesScheduleAEfileQueryParams withImageNumber(String[] imageNumber) {
        this.imageNumber = imageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=line_number")
    public String lineNumber;
    public GetSchedulesScheduleAEfileQueryParams withLineNumber(String lineNumber) {
        this.lineNumber = lineNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_amount")
    public String maxAmount;
    public GetSchedulesScheduleAEfileQueryParams withMaxAmount(String maxAmount) {
        this.maxAmount = maxAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_date")
    public LocalDate maxDate;
    public GetSchedulesScheduleAEfileQueryParams withMaxDate(LocalDate maxDate) {
        this.maxDate = maxDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_image_number")
    public String maxImageNumber;
    public GetSchedulesScheduleAEfileQueryParams withMaxImageNumber(String maxImageNumber) {
        this.maxImageNumber = maxImageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_amount")
    public String minAmount;
    public GetSchedulesScheduleAEfileQueryParams withMinAmount(String minAmount) {
        this.minAmount = minAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_date")
    public LocalDate minDate;
    public GetSchedulesScheduleAEfileQueryParams withMinDate(LocalDate minDate) {
        this.minDate = minDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_image_number")
    public String minImageNumber;
    public GetSchedulesScheduleAEfileQueryParams withMinImageNumber(String minImageNumber) {
        this.minImageNumber = minImageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetSchedulesScheduleAEfileQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetSchedulesScheduleAEfileQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetSchedulesScheduleAEfileQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetSchedulesScheduleAEfileQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetSchedulesScheduleAEfileQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetSchedulesScheduleAEfileQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
}