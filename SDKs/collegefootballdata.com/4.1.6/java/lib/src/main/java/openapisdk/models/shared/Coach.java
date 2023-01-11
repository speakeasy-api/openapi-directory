package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Coach {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public Coach withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public Coach withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seasons")
    public CoachSeasons[] seasons;
    public Coach withSeasons(CoachSeasons[] seasons) {
        this.seasons = seasons;
        return this;
    }
}