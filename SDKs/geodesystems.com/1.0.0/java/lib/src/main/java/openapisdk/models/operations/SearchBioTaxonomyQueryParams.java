package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchBioTaxonomyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchBioTaxonomyQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchBioTaxonomyQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchBioTaxonomyQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchBioTaxonomyQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchBioTaxonomyQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchBioTaxonomyQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchBioTaxonomyQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchBioTaxonomyQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchBioTaxonomyQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchBioTaxonomyQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchBioTaxonomyQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchBioTaxonomyQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchBioTaxonomyQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchBioTaxonomyQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.bio_taxonomy.aliases")
    public String searchBioTaxonomyAliases;
    public SearchBioTaxonomyQueryParams withSearchBioTaxonomyAliases(String searchBioTaxonomyAliases) {
        this.searchBioTaxonomyAliases = searchBioTaxonomyAliases;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.bio_taxonomy.division")
    public String searchBioTaxonomyDivision;
    public SearchBioTaxonomyQueryParams withSearchBioTaxonomyDivision(String searchBioTaxonomyDivision) {
        this.searchBioTaxonomyDivision = searchBioTaxonomyDivision;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.bio_taxonomy.embl_code")
    public String searchBioTaxonomyEmblCode;
    public SearchBioTaxonomyQueryParams withSearchBioTaxonomyEmblCode(String searchBioTaxonomyEmblCode) {
        this.searchBioTaxonomyEmblCode = searchBioTaxonomyEmblCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.bio_taxonomy.inherited_div")
    public Boolean searchBioTaxonomyInheritedDiv;
    public SearchBioTaxonomyQueryParams withSearchBioTaxonomyInheritedDiv(Boolean searchBioTaxonomyInheritedDiv) {
        this.searchBioTaxonomyInheritedDiv = searchBioTaxonomyInheritedDiv;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.bio_taxonomy.rank")
    public String searchBioTaxonomyRank;
    public SearchBioTaxonomyQueryParams withSearchBioTaxonomyRank(String searchBioTaxonomyRank) {
        this.searchBioTaxonomyRank = searchBioTaxonomyRank;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchBioTaxonomyQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchBioTaxonomyQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchBioTaxonomyQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}