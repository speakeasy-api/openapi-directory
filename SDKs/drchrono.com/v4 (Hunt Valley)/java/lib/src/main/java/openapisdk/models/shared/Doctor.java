package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Doctor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cell_phone")
    public String cellPhone;
    public Doctor withCellPhone(String cellPhone) {
        this.cellPhone = cellPhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public DoctorCountryEnum country;
    public Doctor withCountry(DoctorCountryEnum country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Doctor withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public Doctor withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_npi_number")
    public String groupNpiNumber;
    public Doctor withGroupNpiNumber(String groupNpiNumber) {
        this.groupNpiNumber = groupNpiNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("home_phone")
    public String homePhone;
    public Doctor withHomePhone(String homePhone) {
        this.homePhone = homePhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Doctor withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_account_suspended")
    public Boolean isAccountSuspended;
    public Doctor withIsAccountSuspended(Boolean isAccountSuspended) {
        this.isAccountSuspended = isAccountSuspended;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job_title")
    public DoctorJobTitleEnum jobTitle;
    public Doctor withJobTitle(DoctorJobTitleEnum jobTitle) {
        this.jobTitle = jobTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public Doctor withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("npi_number")
    public String npiNumber;
    public Doctor withNpiNumber(String npiNumber) {
        this.npiNumber = npiNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("office_phone")
    public String officePhone;
    public Doctor withOfficePhone(String officePhone) {
        this.officePhone = officePhone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("practice_group")
    public String practiceGroup;
    public Doctor withPracticeGroup(String practiceGroup) {
        this.practiceGroup = practiceGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("practice_group_name")
    public String practiceGroupName;
    public Doctor withPracticeGroupName(String practiceGroupName) {
        this.practiceGroupName = practiceGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile_picture")
    public String profilePicture;
    public Doctor withProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("specialty")
    public String specialty;
    public Doctor withSpecialty(String specialty) {
        this.specialty = specialty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public String suffix;
    public Doctor withSuffix(String suffix) {
        this.suffix = suffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public Doctor withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public Doctor withWebsite(String website) {
        this.website = website;
        return this;
    }
}