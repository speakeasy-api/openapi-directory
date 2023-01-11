package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EmployeePartnerInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("birthday")
    public LocalDate birthday;
    public EmployeePartnerInput withBirthday(LocalDate birthday) {
        this.birthday = birthday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deceased_on")
    public LocalDate deceasedOn;
    public EmployeePartnerInput withDeceasedOn(LocalDate deceasedOn) {
        this.deceasedOn = deceasedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public EmployeePartnerInput withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public GenderEnum gender;
    public EmployeePartnerInput withGender(GenderEnum gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initials")
    public String initials;
    public EmployeePartnerInput withInitials(String initials) {
        this.initials = initials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public EmployeePartnerInput withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("middle_name")
    public String middleName;
    public EmployeePartnerInput withMiddleName(String middleName) {
        this.middleName = middleName;
        return this;
    }
}