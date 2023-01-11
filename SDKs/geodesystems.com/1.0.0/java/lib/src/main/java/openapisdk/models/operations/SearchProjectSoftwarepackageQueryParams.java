package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchProjectSoftwarepackageQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchProjectSoftwarepackageQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchProjectSoftwarepackageQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchProjectSoftwarepackageQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchProjectSoftwarepackageQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchProjectSoftwarepackageQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchProjectSoftwarepackageQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchProjectSoftwarepackageQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchProjectSoftwarepackageQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchProjectSoftwarepackageQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchProjectSoftwarepackageQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchProjectSoftwarepackageQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchProjectSoftwarepackageQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchProjectSoftwarepackageQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchProjectSoftwarepackageQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.project_softwarepackage.capabilities")
    public String searchProjectSoftwarepackageCapabilities;
    public SearchProjectSoftwarepackageQueryParams withSearchProjectSoftwarepackageCapabilities(String searchProjectSoftwarepackageCapabilities) {
        this.searchProjectSoftwarepackageCapabilities = searchProjectSoftwarepackageCapabilities;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.project_softwarepackage.domain")
    public String searchProjectSoftwarepackageDomain;
    public SearchProjectSoftwarepackageQueryParams withSearchProjectSoftwarepackageDomain(String searchProjectSoftwarepackageDomain) {
        this.searchProjectSoftwarepackageDomain = searchProjectSoftwarepackageDomain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.project_softwarepackage.license")
    public String searchProjectSoftwarepackageLicense;
    public SearchProjectSoftwarepackageQueryParams withSearchProjectSoftwarepackageLicense(String searchProjectSoftwarepackageLicense) {
        this.searchProjectSoftwarepackageLicense = searchProjectSoftwarepackageLicense;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.project_softwarepackage.platform")
    public String searchProjectSoftwarepackagePlatform;
    public SearchProjectSoftwarepackageQueryParams withSearchProjectSoftwarepackagePlatform(String searchProjectSoftwarepackagePlatform) {
        this.searchProjectSoftwarepackagePlatform = searchProjectSoftwarepackagePlatform;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.project_softwarepackage.software_type")
    public String searchProjectSoftwarepackageSoftwareType;
    public SearchProjectSoftwarepackageQueryParams withSearchProjectSoftwarepackageSoftwareType(String searchProjectSoftwarepackageSoftwareType) {
        this.searchProjectSoftwarepackageSoftwareType = searchProjectSoftwarepackageSoftwareType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.project_softwarepackage.software_use")
    public String searchProjectSoftwarepackageSoftwareUse;
    public SearchProjectSoftwarepackageQueryParams withSearchProjectSoftwarepackageSoftwareUse(String searchProjectSoftwarepackageSoftwareUse) {
        this.searchProjectSoftwarepackageSoftwareUse = searchProjectSoftwarepackageSoftwareUse;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.project_softwarepackage.status")
    public String searchProjectSoftwarepackageStatus;
    public SearchProjectSoftwarepackageQueryParams withSearchProjectSoftwarepackageStatus(String searchProjectSoftwarepackageStatus) {
        this.searchProjectSoftwarepackageStatus = searchProjectSoftwarepackageStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchProjectSoftwarepackageQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchProjectSoftwarepackageQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchProjectSoftwarepackageQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}