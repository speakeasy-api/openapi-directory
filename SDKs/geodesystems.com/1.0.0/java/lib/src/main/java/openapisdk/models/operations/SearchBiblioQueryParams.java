package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchBiblioQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchBiblioQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchBiblioQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchBiblioQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchBiblioQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchBiblioQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchBiblioQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchBiblioQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchBiblioQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchBiblioQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchBiblioQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchBiblioQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchBiblioQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchBiblioQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchBiblioQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.biblio.institution")
    public String searchBiblioInstitution;
    public SearchBiblioQueryParams withSearchBiblioInstitution(String searchBiblioInstitution) {
        this.searchBiblioInstitution = searchBiblioInstitution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.biblio.other_authors")
    public String searchBiblioOtherAuthors;
    public SearchBiblioQueryParams withSearchBiblioOtherAuthors(String searchBiblioOtherAuthors) {
        this.searchBiblioOtherAuthors = searchBiblioOtherAuthors;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.biblio.primary_author")
    public String searchBiblioPrimaryAuthor;
    public SearchBiblioQueryParams withSearchBiblioPrimaryAuthor(String searchBiblioPrimaryAuthor) {
        this.searchBiblioPrimaryAuthor = searchBiblioPrimaryAuthor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.biblio.publication")
    public String searchBiblioPublication;
    public SearchBiblioQueryParams withSearchBiblioPublication(String searchBiblioPublication) {
        this.searchBiblioPublication = searchBiblioPublication;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.biblio.type")
    public String searchBiblioType;
    public SearchBiblioQueryParams withSearchBiblioType(String searchBiblioType) {
        this.searchBiblioType = searchBiblioType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchBiblioQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchBiblioQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchBiblioQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}