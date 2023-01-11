package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProjectStatusRequestInput
 * A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: "green" for projects that are on track, "yellow" for projects at risk, and "red" for projects that are behind.
**/
public class ProjectStatusRequestInput {
    @JsonProperty("color")
    public ProjectStatusRequestColorEnum color;
    public ProjectStatusRequestInput withColor(ProjectStatusRequestColorEnum color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_text")
    public String htmlText;
    public ProjectStatusRequestInput withHtmlText(String htmlText) {
        this.htmlText = htmlText;
        return this;
    }
    @JsonProperty("text")
    public String text;
    public ProjectStatusRequestInput withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ProjectStatusRequestInput withTitle(String title) {
        this.title = title;
        return this;
    }
}