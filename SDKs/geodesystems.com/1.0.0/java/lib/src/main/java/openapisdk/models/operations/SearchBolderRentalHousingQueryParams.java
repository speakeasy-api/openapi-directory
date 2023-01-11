package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchBolderRentalHousingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchBolderRentalHousingQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchBolderRentalHousingQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchBolderRentalHousingQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchBolderRentalHousingQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchBolderRentalHousingQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchBolderRentalHousingQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchBolderRentalHousingQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchBolderRentalHousingQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchBolderRentalHousingQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchBolderRentalHousingQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchBolderRentalHousingQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchBolderRentalHousingQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchBolderRentalHousingQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchBolderRentalHousingQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.bldgtype")
    public String searchDbBolderRentalHousingBldgtype;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingBldgtype(String searchDbBolderRentalHousingBldgtype) {
        this.searchDbBolderRentalHousingBldgtype = searchDbBolderRentalHousingBldgtype;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.company")
    public String searchDbBolderRentalHousingCompany;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingCompany(String searchDbBolderRentalHousingCompany) {
        this.searchDbBolderRentalHousingCompany = searchDbBolderRentalHousingCompany;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.complexnm")
    public String searchDbBolderRentalHousingComplexnm;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingComplexnm(String searchDbBolderRentalHousingComplexnm) {
        this.searchDbBolderRentalHousingComplexnm = searchDbBolderRentalHousingComplexnm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.dwellunits")
    public Long searchDbBolderRentalHousingDwellunits;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingDwellunits(Long searchDbBolderRentalHousingDwellunits) {
        this.searchDbBolderRentalHousingDwellunits = searchDbBolderRentalHousingDwellunits;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.engcompl")
    public String searchDbBolderRentalHousingEngcompl;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingEngcompl(String searchDbBolderRentalHousingEngcompl) {
        this.searchDbBolderRentalHousingEngcompl = searchDbBolderRentalHousingEngcompl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.licenseexp")
    public String searchDbBolderRentalHousingLicenseexp;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingLicenseexp(String searchDbBolderRentalHousingLicenseexp) {
        this.searchDbBolderRentalHousingLicenseexp = searchDbBolderRentalHousingLicenseexp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.licensenum")
    public String searchDbBolderRentalHousingLicensenum;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingLicensenum(String searchDbBolderRentalHousingLicensenum) {
        this.searchDbBolderRentalHousingLicensenum = searchDbBolderRentalHousingLicensenum;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.location")
    public String searchDbBolderRentalHousingLocation;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingLocation(String searchDbBolderRentalHousingLocation) {
        this.searchDbBolderRentalHousingLocation = searchDbBolderRentalHousingLocation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.name")
    public String searchDbBolderRentalHousingName;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingName(String searchDbBolderRentalHousingName) {
        this.searchDbBolderRentalHousingName = searchDbBolderRentalHousingName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.neighbrhd")
    public String searchDbBolderRentalHousingNeighbrhd;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingNeighbrhd(String searchDbBolderRentalHousingNeighbrhd) {
        this.searchDbBolderRentalHousingNeighbrhd = searchDbBolderRentalHousingNeighbrhd;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.person_1")
    public String searchDbBolderRentalHousingPerson1;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingPerson1(String searchDbBolderRentalHousingPerson1) {
        this.searchDbBolderRentalHousingPerson1 = searchDbBolderRentalHousingPerson1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.person_2")
    public String searchDbBolderRentalHousingPerson2;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingPerson2(String searchDbBolderRentalHousingPerson2) {
        this.searchDbBolderRentalHousingPerson2 = searchDbBolderRentalHousingPerson2;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.persontype")
    public String searchDbBolderRentalHousingPersontype;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingPersontype(String searchDbBolderRentalHousingPersontype) {
        this.searchDbBolderRentalHousingPersontype = searchDbBolderRentalHousingPersontype;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.ppl1_coname")
    public String searchDbBolderRentalHousingPpl1Coname;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingPpl1Coname(String searchDbBolderRentalHousingPpl1Coname) {
        this.searchDbBolderRentalHousingPpl1Coname = searchDbBolderRentalHousingPpl1Coname;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.ppl1_role")
    public String searchDbBolderRentalHousingPpl1Role;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingPpl1Role(String searchDbBolderRentalHousingPpl1Role) {
        this.searchDbBolderRentalHousingPpl1Role = searchDbBolderRentalHousingPpl1Role;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.ppl2_coname")
    public String searchDbBolderRentalHousingPpl2Coname;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingPpl2Coname(String searchDbBolderRentalHousingPpl2Coname) {
        this.searchDbBolderRentalHousingPpl2Coname = searchDbBolderRentalHousingPpl2Coname;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.ppl2_role")
    public String searchDbBolderRentalHousingPpl2Role;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingPpl2Role(String searchDbBolderRentalHousingPpl2Role) {
        this.searchDbBolderRentalHousingPpl2Role = searchDbBolderRentalHousingPpl2Role;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.propaddr1")
    public String searchDbBolderRentalHousingPropaddr1;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingPropaddr1(String searchDbBolderRentalHousingPropaddr1) {
        this.searchDbBolderRentalHousingPropaddr1 = searchDbBolderRentalHousingPropaddr1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.rentaltype")
    public String searchDbBolderRentalHousingRentaltype;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingRentaltype(String searchDbBolderRentalHousingRentaltype) {
        this.searchDbBolderRentalHousingRentaltype = searchDbBolderRentalHousingRentaltype;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_bolder_rental_housing.roomunits")
    public Long searchDbBolderRentalHousingRoomunits;
    public SearchBolderRentalHousingQueryParams withSearchDbBolderRentalHousingRoomunits(Long searchDbBolderRentalHousingRoomunits) {
        this.searchDbBolderRentalHousingRoomunits = searchDbBolderRentalHousingRoomunits;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchBolderRentalHousingQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchBolderRentalHousingQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchBolderRentalHousingQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}