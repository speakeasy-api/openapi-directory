package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchConstructionPermitsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchConstructionPermitsQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchConstructionPermitsQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchConstructionPermitsQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchConstructionPermitsQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchConstructionPermitsQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchConstructionPermitsQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchConstructionPermitsQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchConstructionPermitsQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchConstructionPermitsQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchConstructionPermitsQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchConstructionPermitsQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchConstructionPermitsQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchConstructionPermitsQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchConstructionPermitsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.address")
    public String searchDbConstructionPermitsAddress;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsAddress(String searchDbConstructionPermitsAddress) {
        this.searchDbConstructionPermitsAddress = searchDbConstructionPermitsAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.affordable_hsg_unit")
    public Long searchDbConstructionPermitsAffordableHsgUnit;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsAffordableHsgUnit(Long searchDbConstructionPermitsAffordableHsgUnit) {
        this.searchDbConstructionPermitsAffordableHsgUnit = searchDbConstructionPermitsAffordableHsgUnit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.applied")
    public String searchDbConstructionPermitsApplied;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsApplied(String searchDbConstructionPermitsApplied) {
        this.searchDbConstructionPermitsApplied = searchDbConstructionPermitsApplied;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.approved")
    public String searchDbConstructionPermitsApproved;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsApproved(String searchDbConstructionPermitsApproved) {
        this.searchDbConstructionPermitsApproved = searchDbConstructionPermitsApproved;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.building_uses_and_work_scopes")
    public String searchDbConstructionPermitsBuildingUsesAndWorkScopes;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsBuildingUsesAndWorkScopes(String searchDbConstructionPermitsBuildingUsesAndWorkScopes) {
        this.searchDbConstructionPermitsBuildingUsesAndWorkScopes = searchDbConstructionPermitsBuildingUsesAndWorkScopes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.case_status")
    public String searchDbConstructionPermitsCaseStatus;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsCaseStatus(String searchDbConstructionPermitsCaseStatus) {
        this.searchDbConstructionPermitsCaseStatus = searchDbConstructionPermitsCaseStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.category")
    public String searchDbConstructionPermitsCategory;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsCategory(String searchDbConstructionPermitsCategory) {
        this.searchDbConstructionPermitsCategory = searchDbConstructionPermitsCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.co_date")
    public String searchDbConstructionPermitsCoDate;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsCoDate(String searchDbConstructionPermitsCoDate) {
        this.searchDbConstructionPermitsCoDate = searchDbConstructionPermitsCoDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.completion_date")
    public String searchDbConstructionPermitsCompletionDate;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsCompletionDate(String searchDbConstructionPermitsCompletionDate) {
        this.searchDbConstructionPermitsCompletionDate = searchDbConstructionPermitsCompletionDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.contractor_company")
    public String searchDbConstructionPermitsContractorCompany;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsContractorCompany(String searchDbConstructionPermitsContractorCompany) {
        this.searchDbConstructionPermitsContractorCompany = searchDbConstructionPermitsContractorCompany;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.contractor_first_name")
    public String searchDbConstructionPermitsContractorFirstName;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsContractorFirstName(String searchDbConstructionPermitsContractorFirstName) {
        this.searchDbConstructionPermitsContractorFirstName = searchDbConstructionPermitsContractorFirstName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.contractor_last_name")
    public String searchDbConstructionPermitsContractorLastName;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsContractorLastName(String searchDbConstructionPermitsContractorLastName) {
        this.searchDbConstructionPermitsContractorLastName = searchDbConstructionPermitsContractorLastName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.existing_res_unit")
    public Long searchDbConstructionPermitsExistingResUnit;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsExistingResUnit(Long searchDbConstructionPermitsExistingResUnit) {
        this.searchDbConstructionPermitsExistingResUnit = searchDbConstructionPermitsExistingResUnit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.issued")
    public String searchDbConstructionPermitsIssued;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsIssued(String searchDbConstructionPermitsIssued) {
        this.searchDbConstructionPermitsIssued = searchDbConstructionPermitsIssued;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.narrative_description")
    public String searchDbConstructionPermitsNarrativeDescription;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsNarrativeDescription(String searchDbConstructionPermitsNarrativeDescription) {
        this.searchDbConstructionPermitsNarrativeDescription = searchDbConstructionPermitsNarrativeDescription;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.new_res_unit")
    public Long searchDbConstructionPermitsNewResUnit;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsNewResUnit(Long searchDbConstructionPermitsNewResUnit) {
        this.searchDbConstructionPermitsNewResUnit = searchDbConstructionPermitsNewResUnit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.new_sf")
    public Long searchDbConstructionPermitsNewSf;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsNewSf(Long searchDbConstructionPermitsNewSf) {
        this.searchDbConstructionPermitsNewSf = searchDbConstructionPermitsNewSf;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.owner1_company")
    public String searchDbConstructionPermitsOwner1Company;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsOwner1Company(String searchDbConstructionPermitsOwner1Company) {
        this.searchDbConstructionPermitsOwner1Company = searchDbConstructionPermitsOwner1Company;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.owner1_first_name")
    public String searchDbConstructionPermitsOwner1FirstName;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsOwner1FirstName(String searchDbConstructionPermitsOwner1FirstName) {
        this.searchDbConstructionPermitsOwner1FirstName = searchDbConstructionPermitsOwner1FirstName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.owner1_last_name")
    public String searchDbConstructionPermitsOwner1LastName;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsOwner1LastName(String searchDbConstructionPermitsOwner1LastName) {
        this.searchDbConstructionPermitsOwner1LastName = searchDbConstructionPermitsOwner1LastName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.owner2_company")
    public String searchDbConstructionPermitsOwner2Company;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsOwner2Company(String searchDbConstructionPermitsOwner2Company) {
        this.searchDbConstructionPermitsOwner2Company = searchDbConstructionPermitsOwner2Company;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.owner2_first_name")
    public String searchDbConstructionPermitsOwner2FirstName;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsOwner2FirstName(String searchDbConstructionPermitsOwner2FirstName) {
        this.searchDbConstructionPermitsOwner2FirstName = searchDbConstructionPermitsOwner2FirstName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.owner2_last_name")
    public String searchDbConstructionPermitsOwner2LastName;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsOwner2LastName(String searchDbConstructionPermitsOwner2LastName) {
        this.searchDbConstructionPermitsOwner2LastName = searchDbConstructionPermitsOwner2LastName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.permit_types")
    public String searchDbConstructionPermitsPermitTypes;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsPermitTypes(String searchDbConstructionPermitsPermitTypes) {
        this.searchDbConstructionPermitsPermitTypes = searchDbConstructionPermitsPermitTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.primary_company")
    public String searchDbConstructionPermitsPrimaryCompany;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsPrimaryCompany(String searchDbConstructionPermitsPrimaryCompany) {
        this.searchDbConstructionPermitsPrimaryCompany = searchDbConstructionPermitsPrimaryCompany;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.primary_first_name")
    public String searchDbConstructionPermitsPrimaryFirstName;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsPrimaryFirstName(String searchDbConstructionPermitsPrimaryFirstName) {
        this.searchDbConstructionPermitsPrimaryFirstName = searchDbConstructionPermitsPrimaryFirstName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.primary_last_name")
    public String searchDbConstructionPermitsPrimaryLastName;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsPrimaryLastName(String searchDbConstructionPermitsPrimaryLastName) {
        this.searchDbConstructionPermitsPrimaryLastName = searchDbConstructionPermitsPrimaryLastName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.remodel_sf")
    public Long searchDbConstructionPermitsRemodelSf;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsRemodelSf(Long searchDbConstructionPermitsRemodelSf) {
        this.searchDbConstructionPermitsRemodelSf = searchDbConstructionPermitsRemodelSf;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.total_project_value")
    public Double searchDbConstructionPermitsTotalProjectValue;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsTotalProjectValue(Double searchDbConstructionPermitsTotalProjectValue) {
        this.searchDbConstructionPermitsTotalProjectValue = searchDbConstructionPermitsTotalProjectValue;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_construction_permits.total_subpermit_value")
    public Double searchDbConstructionPermitsTotalSubpermitValue;
    public SearchConstructionPermitsQueryParams withSearchDbConstructionPermitsTotalSubpermitValue(Double searchDbConstructionPermitsTotalSubpermitValue) {
        this.searchDbConstructionPermitsTotalSubpermitValue = searchDbConstructionPermitsTotalSubpermitValue;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchConstructionPermitsQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchConstructionPermitsQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchConstructionPermitsQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}