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

public class PersonAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avatar_id")
    public String avatarId;
    public PersonAttributes withAvatarId(String avatarId) {
        this.avatarId = avatarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("biography")
    public String biography;
    public PersonAttributes withBiography(String biography) {
        this.biography = biography;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("born")
    public LocalDate born;
    public PersonAttributes withBorn(LocalDate born) {
        this.born = born;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public PersonAttributes withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("died")
    public LocalDate died;
    public PersonAttributes withDied(LocalDate died) {
        this.died = died;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first_name")
    public String firstName;
    public PersonAttributes withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from_country")
    public String fromCountry;
    public PersonAttributes withFromCountry(String fromCountry) {
        this.fromCountry = fromCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from_locality")
    public String fromLocality;
    public PersonAttributes withFromLocality(String fromLocality) {
        this.fromLocality = fromLocality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from_region")
    public String fromRegion;
    public PersonAttributes withFromRegion(String fromRegion) {
        this.fromRegion = fromRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_name")
    public String lastName;
    public PersonAttributes withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public_email")
    public String publicEmail;
    public PersonAttributes withPublicEmail(String publicEmail) {
        this.publicEmail = publicEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public PersonAttributes withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}