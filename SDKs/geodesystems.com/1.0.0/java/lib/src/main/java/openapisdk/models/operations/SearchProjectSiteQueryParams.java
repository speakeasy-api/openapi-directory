package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchProjectSiteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchProjectSiteQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchProjectSiteQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchProjectSiteQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchProjectSiteQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchProjectSiteQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchProjectSiteQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchProjectSiteQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchProjectSiteQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchProjectSiteQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchProjectSiteQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchProjectSiteQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchProjectSiteQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchProjectSiteQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchProjectSiteQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.project_site.country")
    public String searchProjectSiteCountry;
    public SearchProjectSiteQueryParams withSearchProjectSiteCountry(String searchProjectSiteCountry) {
        this.searchProjectSiteCountry = searchProjectSiteCountry;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.project_site.county")
    public String searchProjectSiteCounty;
    public SearchProjectSiteQueryParams withSearchProjectSiteCounty(String searchProjectSiteCounty) {
        this.searchProjectSiteCounty = searchProjectSiteCounty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.project_site.network")
    public String searchProjectSiteNetwork;
    public SearchProjectSiteQueryParams withSearchProjectSiteNetwork(String searchProjectSiteNetwork) {
        this.searchProjectSiteNetwork = searchProjectSiteNetwork;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.project_site.short_name")
    public String searchProjectSiteShortName;
    public SearchProjectSiteQueryParams withSearchProjectSiteShortName(String searchProjectSiteShortName) {
        this.searchProjectSiteShortName = searchProjectSiteShortName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.project_site.site_type")
    public String searchProjectSiteSiteType;
    public SearchProjectSiteQueryParams withSearchProjectSiteSiteType(String searchProjectSiteSiteType) {
        this.searchProjectSiteSiteType = searchProjectSiteSiteType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.project_site.state")
    public String searchProjectSiteState;
    public SearchProjectSiteQueryParams withSearchProjectSiteState(String searchProjectSiteState) {
        this.searchProjectSiteState = searchProjectSiteState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.project_site.status")
    public String searchProjectSiteStatus;
    public SearchProjectSiteQueryParams withSearchProjectSiteStatus(String searchProjectSiteStatus) {
        this.searchProjectSiteStatus = searchProjectSiteStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchProjectSiteQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchProjectSiteQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchProjectSiteQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}