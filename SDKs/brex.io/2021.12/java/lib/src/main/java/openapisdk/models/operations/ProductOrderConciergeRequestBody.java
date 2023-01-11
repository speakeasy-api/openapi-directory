package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductOrderConciergeRequestBody {
    @SpeakeasyMetadata("form:name=companyName")
    public String companyName;
    public ProductOrderConciergeRequestBody withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @SpeakeasyMetadata("form:name=contactEmail")
    public String contactEmail;
    public ProductOrderConciergeRequestBody withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @SpeakeasyMetadata("form:name=contactPhone")
    public String contactPhone;
    public ProductOrderConciergeRequestBody withContactPhone(String contactPhone) {
        this.contactPhone = contactPhone;
        return this;
    }
    @SpeakeasyMetadata("form:name=costConfirmation")
    public Boolean costConfirmation;
    public ProductOrderConciergeRequestBody withCostConfirmation(Boolean costConfirmation) {
        this.costConfirmation = costConfirmation;
        return this;
    }
    @SpeakeasyMetadata("form:name=country")
    public String country;
    public ProductOrderConciergeRequestBody withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("form:name=financialData")
    public Boolean financialData;
    public ProductOrderConciergeRequestBody withFinancialData(Boolean financialData) {
        this.financialData = financialData;
        return this;
    }
    @SpeakeasyMetadata("form:name=historicInformation")
    public Boolean historicInformation;
    public ProductOrderConciergeRequestBody withHistoricInformation(Boolean historicInformation) {
        this.historicInformation = historicInformation;
        return this;
    }
    @SpeakeasyMetadata("form:name=informationRequirements")
    public String informationRequirements;
    public ProductOrderConciergeRequestBody withInformationRequirements(String informationRequirements) {
        this.informationRequirements = informationRequirements;
        return this;
    }
    @SpeakeasyMetadata("form:name=locationInvestigation")
    public Boolean locationInvestigation;
    public ProductOrderConciergeRequestBody withLocationInvestigation(Boolean locationInvestigation) {
        this.locationInvestigation = locationInvestigation;
        return this;
    }
    @SpeakeasyMetadata("form:name=priority")
    public String priority;
    public ProductOrderConciergeRequestBody withPriority(String priority) {
        this.priority = priority;
        return this;
    }
    @SpeakeasyMetadata("form:name=registerData")
    public Boolean registerData;
    public ProductOrderConciergeRequestBody withRegisterData(Boolean registerData) {
        this.registerData = registerData;
        return this;
    }
    @SpeakeasyMetadata("form:name=registerNumber")
    public String registerNumber;
    public ProductOrderConciergeRequestBody withRegisterNumber(String registerNumber) {
        this.registerNumber = registerNumber;
        return this;
    }
    @SpeakeasyMetadata("form:name=subjectId")
    public String subjectId;
    public ProductOrderConciergeRequestBody withSubjectId(String subjectId) {
        this.subjectId = subjectId;
        return this;
    }
}