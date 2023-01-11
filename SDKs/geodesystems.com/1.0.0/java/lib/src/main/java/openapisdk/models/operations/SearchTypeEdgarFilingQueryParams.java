package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchTypeEdgarFilingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchTypeEdgarFilingQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchTypeEdgarFilingQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchTypeEdgarFilingQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchTypeEdgarFilingQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchTypeEdgarFilingQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchTypeEdgarFilingQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchTypeEdgarFilingQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchTypeEdgarFilingQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchTypeEdgarFilingQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchTypeEdgarFilingQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchTypeEdgarFilingQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchTypeEdgarFilingQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchTypeEdgarFilingQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchTypeEdgarFilingQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_edgar_filing.cik_number")
    public String searchTypeEdgarFilingCikNumber;
    public SearchTypeEdgarFilingQueryParams withSearchTypeEdgarFilingCikNumber(String searchTypeEdgarFilingCikNumber) {
        this.searchTypeEdgarFilingCikNumber = searchTypeEdgarFilingCikNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_edgar_filing.company_name")
    public String searchTypeEdgarFilingCompanyName;
    public SearchTypeEdgarFilingQueryParams withSearchTypeEdgarFilingCompanyName(String searchTypeEdgarFilingCompanyName) {
        this.searchTypeEdgarFilingCompanyName = searchTypeEdgarFilingCompanyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_edgar_filing.form_type")
    public String searchTypeEdgarFilingFormType;
    public SearchTypeEdgarFilingQueryParams withSearchTypeEdgarFilingFormType(String searchTypeEdgarFilingFormType) {
        this.searchTypeEdgarFilingFormType = searchTypeEdgarFilingFormType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_edgar_filing.irs_number")
    public String searchTypeEdgarFilingIrsNumber;
    public SearchTypeEdgarFilingQueryParams withSearchTypeEdgarFilingIrsNumber(String searchTypeEdgarFilingIrsNumber) {
        this.searchTypeEdgarFilingIrsNumber = searchTypeEdgarFilingIrsNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_edgar_filing.standard_industrial_classification")
    public String searchTypeEdgarFilingStandardIndustrialClassification;
    public SearchTypeEdgarFilingQueryParams withSearchTypeEdgarFilingStandardIndustrialClassification(String searchTypeEdgarFilingStandardIndustrialClassification) {
        this.searchTypeEdgarFilingStandardIndustrialClassification = searchTypeEdgarFilingStandardIndustrialClassification;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.type_edgar_filing.state")
    public String searchTypeEdgarFilingState;
    public SearchTypeEdgarFilingQueryParams withSearchTypeEdgarFilingState(String searchTypeEdgarFilingState) {
        this.searchTypeEdgarFilingState = searchTypeEdgarFilingState;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchTypeEdgarFilingQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchTypeEdgarFilingQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchTypeEdgarFilingQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}