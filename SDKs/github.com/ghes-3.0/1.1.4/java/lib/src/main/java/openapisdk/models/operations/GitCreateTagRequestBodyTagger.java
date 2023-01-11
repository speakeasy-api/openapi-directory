package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GitCreateTagRequestBodyTagger
 * An object with information about the individual creating the tag.
**/
public class GitCreateTagRequestBodyTagger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("date")
    public OffsetDateTime date;
    public GitCreateTagRequestBodyTagger withDate(OffsetDateTime date) {
        this.date = date;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public GitCreateTagRequestBodyTagger withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GitCreateTagRequestBodyTagger withName(String name) {
        this.name = name;
        return this;
    }
}