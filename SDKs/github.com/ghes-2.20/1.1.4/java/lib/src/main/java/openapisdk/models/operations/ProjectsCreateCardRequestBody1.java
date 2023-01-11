package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ProjectsCreateCardRequestBody1 {
    @JsonProperty("note")
    public String note;
    public ProjectsCreateCardRequestBody1 withNote(String note) {
        this.note = note;
        return this;
    }
}