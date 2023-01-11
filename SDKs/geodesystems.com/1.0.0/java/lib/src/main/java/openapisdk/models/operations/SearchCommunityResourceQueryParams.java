package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchCommunityResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchCommunityResourceQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchCommunityResourceQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchCommunityResourceQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchCommunityResourceQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchCommunityResourceQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchCommunityResourceQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchCommunityResourceQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchCommunityResourceQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchCommunityResourceQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchCommunityResourceQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchCommunityResourceQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchCommunityResourceQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchCommunityResourceQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchCommunityResourceQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.community_resource.address")
    public String searchCommunityResourceAddress;
    public SearchCommunityResourceQueryParams withSearchCommunityResourceAddress(String searchCommunityResourceAddress) {
        this.searchCommunityResourceAddress = searchCommunityResourceAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.community_resource.city")
    public String searchCommunityResourceCity;
    public SearchCommunityResourceQueryParams withSearchCommunityResourceCity(String searchCommunityResourceCity) {
        this.searchCommunityResourceCity = searchCommunityResourceCity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.community_resource.resource_type")
    public String searchCommunityResourceResourceType;
    public SearchCommunityResourceQueryParams withSearchCommunityResourceResourceType(String searchCommunityResourceResourceType) {
        this.searchCommunityResourceResourceType = searchCommunityResourceResourceType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.community_resource.state")
    public String searchCommunityResourceState;
    public SearchCommunityResourceQueryParams withSearchCommunityResourceState(String searchCommunityResourceState) {
        this.searchCommunityResourceState = searchCommunityResourceState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.community_resource.zipcode")
    public String searchCommunityResourceZipcode;
    public SearchCommunityResourceQueryParams withSearchCommunityResourceZipcode(String searchCommunityResourceZipcode) {
        this.searchCommunityResourceZipcode = searchCommunityResourceZipcode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchCommunityResourceQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchCommunityResourceQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchCommunityResourceQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}