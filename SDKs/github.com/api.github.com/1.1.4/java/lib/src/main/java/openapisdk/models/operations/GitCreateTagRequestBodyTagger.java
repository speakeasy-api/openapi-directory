package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GitCreateTagRequestBodyTagger
 * An object with information about the individual creating the tag.
**/
public class GitCreateTagRequestBodyTagger {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public String date;
    public GitCreateTagRequestBodyTagger withDate(String date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public GitCreateTagRequestBodyTagger withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GitCreateTagRequestBodyTagger withName(String name) {
        this.name = name;
        return this;
    }
}