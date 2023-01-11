package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PersonalInfo {
    @JsonProperty("beezUPTimeZoneId")
    public Integer beezUPTimeZoneId;
    public PersonalInfo withBeezUpTimeZoneId(Integer beezUPTimeZoneId) {
        this.beezUPTimeZoneId = beezUPTimeZoneId;
        return this;
    }
    @JsonProperty("firstName")
    public String firstName;
    public PersonalInfo withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonProperty("lastName")
    public String lastName;
    public PersonalInfo withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public PersonalInfo withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whatIDo")
    public String whatIDo;
    public PersonalInfo withWhatIDo(String whatIDo) {
        this.whatIDo = whatIDo;
        return this;
    }
}