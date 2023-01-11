package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProjectRequestCurrentStatusInput
 * A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: "green" for projects that are on track, "yellow" for projects at risk, and "red" for projects that are behind.
**/
public class ProjectRequestCurrentStatusInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public UserCompactInput author;
    public ProjectRequestCurrentStatusInput withAuthor(UserCompactInput author) {
        this.author = author;
        return this;
    }
    @JsonProperty("color")
    public ProjectRequestCurrentStatusColorEnum color;
    public ProjectRequestCurrentStatusInput withColor(ProjectRequestCurrentStatusColorEnum color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public UserCompactInput createdBy;
    public ProjectRequestCurrentStatusInput withCreatedBy(UserCompactInput createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_text")
    public String htmlText;
    public ProjectRequestCurrentStatusInput withHtmlText(String htmlText) {
        this.htmlText = htmlText;
        return this;
    }
    @JsonProperty("text")
    public String text;
    public ProjectRequestCurrentStatusInput withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ProjectRequestCurrentStatusInput withTitle(String title) {
        this.title = title;
        return this;
    }
}