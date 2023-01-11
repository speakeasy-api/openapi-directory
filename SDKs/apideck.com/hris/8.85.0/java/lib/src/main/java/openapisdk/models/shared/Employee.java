package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Employee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addresses")
    public Address[] addresses;
    public Employee withAddresses(Address[] addresses) {
        this.addresses = addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("birthday")
    public LocalDate birthday;
    public Employee withBirthday(LocalDate birthday) {
        this.birthday = birthday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_id")
    public String companyId;
    public Employee withCompanyId(String companyId) {
        this.companyId = companyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company_name")
    public String companyName;
    public Employee withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compensations")
    public EmployeeCompensations[] compensations;
    public Employee withCompensations(EmployeeCompensations[] compensations) {
        this.compensations = compensations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_of_birth")
    public String countryOfBirth;
    public Employee withCountryOfBirth(String countryOfBirth) {
        this.countryOfBirth = countryOfBirth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Employee withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;
    public Employee withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public CustomField[] customFields;
    public Employee withCustomFields(CustomField[] customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deceased_on")
    public LocalDate deceasedOn;
    public Employee withDeceasedOn(LocalDate deceasedOn) {
        this.deceasedOn = deceasedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted")
    public Boolean deleted;
    public Employee withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("department")
    public String department;
    public Employee withDepartment(String department) {
        this.department = department;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("department_id")
    public String departmentId;
    public Employee withDepartmentId(String departmentId) {
        this.departmentId = departmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Employee withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dietary_preference")
    public String dietaryPreference;
    public Employee withDietaryPreference(String dietaryPreference) {
        this.dietaryPreference = dietaryPreference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("direct_reports")
    public String[] directReports;
    public Employee withDirectReports(String[] directReports) {
        this.directReports = directReports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public Employee withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("division")
    public String division;
    public Employee withDivision(String division) {
        this.division = division;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("division_id")
    public String divisionId;
    public Employee withDivisionId(String divisionId) {
        this.divisionId = divisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emails")
    public Email[] emails;
    public Employee withEmails(Email[] emails) {
        this.emails = emails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employee_number")
    public String employeeNumber;
    public Employee withEmployeeNumber(String employeeNumber) {
        this.employeeNumber = employeeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employment_end_date")
    public String employmentEndDate;
    public Employee withEmploymentEndDate(String employmentEndDate) {
        this.employmentEndDate = employmentEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employment_role")
    public EmployeeEmploymentRole employmentRole;
    public Employee withEmploymentRole(EmployeeEmploymentRole employmentRole) {
        this.employmentRole = employmentRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employment_start_date")
    public String employmentStartDate;
    public Employee withEmploymentStartDate(String employmentStartDate) {
        this.employmentStartDate = employmentStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employment_status")
    public EmployeeEmploymentStatusEnum employmentStatus;
    public Employee withEmploymentStatus(EmployeeEmploymentStatusEnum employmentStatus) {
        this.employmentStatus = employmentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public Employee withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("food_allergies")
    public String[] foodAllergies;
    public Employee withFoodAllergies(String[] foodAllergies) {
        this.foodAllergies = foodAllergies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public GenderEnum gender;
    public Employee withGender(GenderEnum gender) {
        this.gender = gender;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Employee withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initials")
    public String initials;
    public Employee withInitials(String initials) {
        this.initials = initials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobs")
    public EmployeeJobs[] jobs;
    public Employee withJobs(EmployeeJobs[] jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public String[] languages;
    public Employee withLanguages(String[] languages) {
        this.languages = languages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public Employee withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manager")
    public EmployeeManager manager;
    public Employee withManager(EmployeeManager manager) {
        this.manager = manager;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marital_status")
    public String maritalStatus;
    public Employee withMaritalStatus(String maritalStatus) {
        this.maritalStatus = maritalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middle_name")
    public String middleName;
    public Employee withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nationalities")
    public String[] nationalities;
    public Employee withNationalities(String[] nationalities) {
        this.nationalities = nationalities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("partner")
    public EmployeePartner partner;
    public Employee withPartner(EmployeePartner partner) {
        this.partner = partner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public PhoneNumber[] phoneNumbers;
    public Employee withPhoneNumbers(PhoneNumber[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photo_url")
    public String photoUrl;
    public Employee withPhotoUrl(String photoUrl) {
        this.photoUrl = photoUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred_language")
    public String preferredLanguage;
    public Employee withPreferredLanguage(String preferredLanguage) {
        this.preferredLanguage = preferredLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferred_name")
    public String preferredName;
    public Employee withPreferredName(String preferredName) {
        this.preferredName = preferredName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pronouns")
    public String pronouns;
    public Employee withPronouns(String pronouns) {
        this.pronouns = pronouns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_url")
    public String recordUrl;
    public Employee withRecordUrl(String recordUrl) {
        this.recordUrl = recordUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("row_version")
    public String rowVersion;
    public Employee withRowVersion(String rowVersion) {
        this.rowVersion = rowVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("salutation")
    public String salutation;
    public Employee withSalutation(String salutation) {
        this.salutation = salutation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("social_links")
    public EmployeeSocialLinks[] socialLinks;
    public Employee withSocialLinks(EmployeeSocialLinks[] socialLinks) {
        this.socialLinks = socialLinks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("social_security_number")
    public String socialSecurityNumber;
    public Employee withSocialSecurityNumber(String socialSecurityNumber) {
        this.socialSecurityNumber = socialSecurityNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public Employee withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source_id")
    public String sourceId;
    public Employee withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public Employee withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_code")
    public String taxCode;
    public Employee withTaxCode(String taxCode) {
        this.taxCode = taxCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax_id")
    public String taxId;
    public Employee withTaxId(String taxId) {
        this.taxId = taxId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team")
    public EmployeeTeam team;
    public Employee withTeam(EmployeeTeam team) {
        this.team = team;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public Employee withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Employee withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public Employee withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_by")
    public String updatedBy;
    public Employee withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("works_remote")
    public Boolean worksRemote;
    public Employee withWorksRemote(Boolean worksRemote) {
        this.worksRemote = worksRemote;
        return this;
    }
}