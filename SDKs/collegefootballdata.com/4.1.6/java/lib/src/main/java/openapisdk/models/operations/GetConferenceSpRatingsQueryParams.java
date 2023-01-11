package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConferenceSpRatingsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=conference")
    public String conference;
    public GetConferenceSpRatingsQueryParams withConference(String conference) {
        this.conference = conference;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=year")
    public Long year;
    public GetConferenceSpRatingsQueryParams withYear(Long year) {
        this.year = year;
        return this;
    }
}