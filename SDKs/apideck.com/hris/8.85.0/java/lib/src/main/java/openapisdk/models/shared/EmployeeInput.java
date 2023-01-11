package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EmployeeInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addresses")
    public Address[] addresses;
    public EmployeeInput withAddresses(Address[] addresses) {
        this.addresses = addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("birthday")
    public LocalDate birthday;
    public EmployeeInput withBirthday(LocalDate birthday) {
        this.birthday = birthday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_id")
    public String companyId;
    public EmployeeInput withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_name")
    public String companyName;
    public EmployeeInput withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compensations")
    public EmployeeCompensationsInput[] compensations;
    public EmployeeInput withCompensations(EmployeeCompensationsInput[] compensations) {
        this.compensations = compensations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_of_birth")
    public String countryOfBirth;
    public EmployeeInput withCountryOfBirth(String countryOfBirth) {
        this.countryOfBirth = countryOfBirth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public CustomField[] customFields;
    public EmployeeInput withCustomFields(CustomField[] customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deceased_on")
    public LocalDate deceasedOn;
    public EmployeeInput withDeceasedOn(LocalDate deceasedOn) {
        this.deceasedOn = deceasedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public EmployeeInput withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("department")
    public String department;
    public EmployeeInput withDepartment(String department) {
        this.department = department;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("department_id")
    public String departmentId;
    public EmployeeInput withDepartmentId(String departmentId) {
        this.departmentId = departmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EmployeeInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dietary_preference")
    public String dietaryPreference;
    public EmployeeInput withDietaryPreference(String dietaryPreference) {
        this.dietaryPreference = dietaryPreference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direct_reports")
    public String[] directReports;
    public EmployeeInput withDirectReports(String[] directReports) {
        this.directReports = directReports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public EmployeeInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("division")
    public String division;
    public EmployeeInput withDivision(String division) {
        this.division = division;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("division_id")
    public String divisionId;
    public EmployeeInput withDivisionId(String divisionId) {
        this.divisionId = divisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emails")
    public Email[] emails;
    public EmployeeInput withEmails(Email[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employee_number")
    public String employeeNumber;
    public EmployeeInput withEmployeeNumber(String employeeNumber) {
        this.employeeNumber = employeeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employment_end_date")
    public String employmentEndDate;
    public EmployeeInput withEmploymentEndDate(String employmentEndDate) {
        this.employmentEndDate = employmentEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employment_role")
    public EmployeeEmploymentRole employmentRole;
    public EmployeeInput withEmploymentRole(EmployeeEmploymentRole employmentRole) {
        this.employmentRole = employmentRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employment_start_date")
    public String employmentStartDate;
    public EmployeeInput withEmploymentStartDate(String employmentStartDate) {
        this.employmentStartDate = employmentStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employment_status")
    public EmployeeEmploymentStatusEnum employmentStatus;
    public EmployeeInput withEmploymentStatus(EmployeeEmploymentStatusEnum employmentStatus) {
        this.employmentStatus = employmentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public EmployeeInput withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("food_allergies")
    public String[] foodAllergies;
    public EmployeeInput withFoodAllergies(String[] foodAllergies) {
        this.foodAllergies = foodAllergies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public GenderEnum gender;
    public EmployeeInput withGender(GenderEnum gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initials")
    public String initials;
    public EmployeeInput withInitials(String initials) {
        this.initials = initials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobs")
    public EmployeeJobsInput[] jobs;
    public EmployeeInput withJobs(EmployeeJobsInput[] jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public String[] languages;
    public EmployeeInput withLanguages(String[] languages) {
        this.languages = languages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public EmployeeInput withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manager")
    public EmployeeManagerInput manager;
    public EmployeeInput withManager(EmployeeManagerInput manager) {
        this.manager = manager;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marital_status")
    public String maritalStatus;
    public EmployeeInput withMaritalStatus(String maritalStatus) {
        this.maritalStatus = maritalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middle_name")
    public String middleName;
    public EmployeeInput withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nationalities")
    public String[] nationalities;
    public EmployeeInput withNationalities(String[] nationalities) {
        this.nationalities = nationalities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partner")
    public EmployeePartnerInput partner;
    public EmployeeInput withPartner(EmployeePartnerInput partner) {
        this.partner = partner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public PhoneNumber[] phoneNumbers;
    public EmployeeInput withPhoneNumbers(PhoneNumber[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photo_url")
    public String photoUrl;
    public EmployeeInput withPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred_language")
    public String preferredLanguage;
    public EmployeeInput withPreferredLanguage(String preferredLanguage) {
        this.preferredLanguage = preferredLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred_name")
    public String preferredName;
    public EmployeeInput withPreferredName(String preferredName) {
        this.preferredName = preferredName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pronouns")
    public String pronouns;
    public EmployeeInput withPronouns(String pronouns) {
        this.pronouns = pronouns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_url")
    public String recordUrl;
    public EmployeeInput withRecordUrl(String recordUrl) {
        this.recordUrl = recordUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("row_version")
    public String rowVersion;
    public EmployeeInput withRowVersion(String rowVersion) {
        this.rowVersion = rowVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salutation")
    public String salutation;
    public EmployeeInput withSalutation(String salutation) {
        this.salutation = salutation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("social_links")
    public EmployeeSocialLinks[] socialLinks;
    public EmployeeInput withSocialLinks(EmployeeSocialLinks[] socialLinks) {
        this.socialLinks = socialLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("social_security_number")
    public String socialSecurityNumber;
    public EmployeeInput withSocialSecurityNumber(String socialSecurityNumber) {
        this.socialSecurityNumber = socialSecurityNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public EmployeeInput withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_id")
    public String sourceId;
    public EmployeeInput withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public EmployeeInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_code")
    public String taxCode;
    public EmployeeInput withTaxCode(String taxCode) {
        this.taxCode = taxCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_id")
    public String taxId;
    public EmployeeInput withTaxId(String taxId) {
        this.taxId = taxId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public EmployeeTeam team;
    public EmployeeInput withTeam(EmployeeTeam team) {
        this.team = team;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public EmployeeInput withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public EmployeeInput withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("works_remote")
    public Boolean worksRemote;
    public EmployeeInput withWorksRemote(Boolean worksRemote) {
        this.worksRemote = worksRemote;
        return this;
    }
}