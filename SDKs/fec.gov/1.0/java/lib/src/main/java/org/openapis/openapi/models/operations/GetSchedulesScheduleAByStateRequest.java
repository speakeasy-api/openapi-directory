/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class GetSchedulesScheduleAByStateRequest {
    /**
     * API key for https://api.data.gov. Get one at https://api.data.gov/signup.
     * 
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;

    public GetSchedulesScheduleAByStateRequest withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    
    /**
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     * 
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_id")
    public String[] committeeId;

    public GetSchedulesScheduleAByStateRequest withCommitteeId(String[] committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    
    /**
     * Filter records to only those that were applicable to a given
     * two-year period.The cycle begins with an odd year and is named
     * for its ending, even year.
     * 
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer[] cycle;

    public GetSchedulesScheduleAByStateRequest withCycle(Integer[] cycle) {
        this.cycle = cycle;
        return this;
    }
    
    /**
     * Exclude values with missing state
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hide_null")
    public Boolean hideNull;

    public GetSchedulesScheduleAByStateRequest withHideNull(Boolean hideNull) {
        this.hideNull = hideNull;
        return this;
    }
    
    /**
     * For paginating through results, starting at page 1
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;

    public GetSchedulesScheduleAByStateRequest withPage(Integer page) {
        this.page = page;
        return this;
    }
    
    /**
     * The number of results returned per page. Defaults to 20.
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;

    public GetSchedulesScheduleAByStateRequest withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    
    /**
     * Provide a field to sort by. Use `-` for descending order.
     * 
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;

    public GetSchedulesScheduleAByStateRequest withSort(String sort) {
        this.sort = sort;
        return this;
    }
    
    /**
     * Hide null values on sorted column(s).
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;

    public GetSchedulesScheduleAByStateRequest withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    
    /**
     * Toggle that filters out all rows having sort column that is non-null
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;

    public GetSchedulesScheduleAByStateRequest withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    
    /**
     * Toggle that sorts null values last
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;

    public GetSchedulesScheduleAByStateRequest withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    
    /**
     * State of contributor
     */
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String[] state;

    public GetSchedulesScheduleAByStateRequest withState(String[] state) {
        this.state = state;
        return this;
    }
    
    public GetSchedulesScheduleAByStateRequest(@JsonProperty("api_key") String apiKey) {
        this.apiKey = apiKey;
  }
}
