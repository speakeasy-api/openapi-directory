package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PatientPatient {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public String address;
    public PatientPatient withAddress(String address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public PatientPatient withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fax")
    public String fax;
    public PatientPatient withFax(String fax) {
        this.fax = fax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public PatientPatient withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public PatientPatient withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middle_name")
    public String middleName;
    public PatientPatient withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("npi")
    public String npi;
    public PatientPatient withNpi(String npi) {
        this.npi = npi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone")
    public String phone;
    public PatientPatient withPhone(String phone) {
        this.phone = phone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider_number")
    public String providerNumber;
    public PatientPatient withProviderNumber(String providerNumber) {
        this.providerNumber = providerNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider_qualifier")
    public PatientPatientProviderQualifierEnum providerQualifier;
    public PatientPatient withProviderQualifier(PatientPatientProviderQualifierEnum providerQualifier) {
        this.providerQualifier = providerQualifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialty")
    public PatientPatientSpecialtyEnum specialty;
    public PatientPatient withSpecialty(PatientPatientSpecialtyEnum specialty) {
        this.specialty = specialty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public String suffix;
    public PatientPatient withSuffix(String suffix) {
        this.suffix = suffix;
        return this;
    }
}