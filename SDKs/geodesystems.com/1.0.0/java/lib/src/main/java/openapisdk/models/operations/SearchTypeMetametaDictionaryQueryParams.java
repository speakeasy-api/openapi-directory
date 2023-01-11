package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchTypeMetametaDictionaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchTypeMetametaDictionaryQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchTypeMetametaDictionaryQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchTypeMetametaDictionaryQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchTypeMetametaDictionaryQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchTypeMetametaDictionaryQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchTypeMetametaDictionaryQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchTypeMetametaDictionaryQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchTypeMetametaDictionaryQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchTypeMetametaDictionaryQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchTypeMetametaDictionaryQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchTypeMetametaDictionaryQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchTypeMetametaDictionaryQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchTypeMetametaDictionaryQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchTypeMetametaDictionaryQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_metameta_dictionary.dictionary_type")
    public String searchTypeMetametaDictionaryDictionaryType;
    public SearchTypeMetametaDictionaryQueryParams withSearchTypeMetametaDictionaryDictionaryType(String searchTypeMetametaDictionaryDictionaryType) {
        this.searchTypeMetametaDictionaryDictionaryType = searchTypeMetametaDictionaryDictionaryType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_metameta_dictionary.field_index")
    public Long searchTypeMetametaDictionaryFieldIndex;
    public SearchTypeMetametaDictionaryQueryParams withSearchTypeMetametaDictionaryFieldIndex(Long searchTypeMetametaDictionaryFieldIndex) {
        this.searchTypeMetametaDictionaryFieldIndex = searchTypeMetametaDictionaryFieldIndex;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_metameta_dictionary.handler_class")
    public String searchTypeMetametaDictionaryHandlerClass;
    public SearchTypeMetametaDictionaryQueryParams withSearchTypeMetametaDictionaryHandlerClass(String searchTypeMetametaDictionaryHandlerClass) {
        this.searchTypeMetametaDictionaryHandlerClass = searchTypeMetametaDictionaryHandlerClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_metameta_dictionary.isgroup")
    public Boolean searchTypeMetametaDictionaryIsgroup;
    public SearchTypeMetametaDictionaryQueryParams withSearchTypeMetametaDictionaryIsgroup(Boolean searchTypeMetametaDictionaryIsgroup) {
        this.searchTypeMetametaDictionaryIsgroup = searchTypeMetametaDictionaryIsgroup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_metameta_dictionary.properties")
    public String searchTypeMetametaDictionaryProperties;
    public SearchTypeMetametaDictionaryQueryParams withSearchTypeMetametaDictionaryProperties(String searchTypeMetametaDictionaryProperties) {
        this.searchTypeMetametaDictionaryProperties = searchTypeMetametaDictionaryProperties;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_metameta_dictionary.short_name")
    public String searchTypeMetametaDictionaryShortName;
    public SearchTypeMetametaDictionaryQueryParams withSearchTypeMetametaDictionaryShortName(String searchTypeMetametaDictionaryShortName) {
        this.searchTypeMetametaDictionaryShortName = searchTypeMetametaDictionaryShortName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_metameta_dictionary.super_type")
    public String searchTypeMetametaDictionarySuperType;
    public SearchTypeMetametaDictionaryQueryParams withSearchTypeMetametaDictionarySuperType(String searchTypeMetametaDictionarySuperType) {
        this.searchTypeMetametaDictionarySuperType = searchTypeMetametaDictionarySuperType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_metameta_dictionary.wiki_text")
    public String searchTypeMetametaDictionaryWikiText;
    public SearchTypeMetametaDictionaryQueryParams withSearchTypeMetametaDictionaryWikiText(String searchTypeMetametaDictionaryWikiText) {
        this.searchTypeMetametaDictionaryWikiText = searchTypeMetametaDictionaryWikiText;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchTypeMetametaDictionaryQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchTypeMetametaDictionaryQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchTypeMetametaDictionaryQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}