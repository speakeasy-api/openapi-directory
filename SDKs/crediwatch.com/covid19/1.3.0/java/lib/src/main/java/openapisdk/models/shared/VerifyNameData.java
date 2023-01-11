package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerifyNameData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("business_name")
    public String businessName;
    public VerifyNameData withBusinessName(String businessName) {
        this.businessName = businessName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public VerifyNameData withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("department_code_and_type")
    public String[] departmentCodeAndType;
    public VerifyNameData withDepartmentCodeAndType(String[] departmentCodeAndType) {
        this.departmentCodeAndType = departmentCodeAndType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity_type")
    public String entityType;
    public VerifyNameData withEntityType(String entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_gstn_verified")
    public Boolean isGstnVerified;
    public VerifyNameData withIsGstnVerified(Boolean isGstnVerified) {
        this.isGstnVerified = isGstnVerified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nature_of_business")
    public String[] natureOfBusiness;
    public VerifyNameData withNatureOfBusiness(String[] natureOfBusiness) {
        this.natureOfBusiness = natureOfBusiness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pincode")
    public Long pincode;
    public VerifyNameData withPincode(Long pincode) {
        this.pincode = pincode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration_date")
    public String registrationDate;
    public VerifyNameData withRegistrationDate(String registrationDate) {
        this.registrationDate = registrationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration_type")
    public String registrationType;
    public VerifyNameData withRegistrationType(String registrationType) {
        this.registrationType = registrationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public VerifyNameData withState(String state) {
        this.state = state;
        return this;
    }
}