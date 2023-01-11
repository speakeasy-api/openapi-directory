package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChecksCreateRequestBodyOutputAnnotations {
    @JsonProperty("annotation_level")
    public ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum annotationLevel;
    public ChecksCreateRequestBodyOutputAnnotations withAnnotationLevel(ChecksCreateRequestBodyOutputAnnotationsAnnotationLevelEnum annotationLevel) {
        this.annotationLevel = annotationLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_column")
    public Long endColumn;
    public ChecksCreateRequestBodyOutputAnnotations withEndColumn(Long endColumn) {
        this.endColumn = endColumn;
        return this;
    }
    @JsonProperty("end_line")
    public Long endLine;
    public ChecksCreateRequestBodyOutputAnnotations withEndLine(Long endLine) {
        this.endLine = endLine;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public ChecksCreateRequestBodyOutputAnnotations withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("path")
    public String path;
    public ChecksCreateRequestBodyOutputAnnotations withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("raw_details")
    public String rawDetails;
    public ChecksCreateRequestBodyOutputAnnotations withRawDetails(String rawDetails) {
        this.rawDetails = rawDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_column")
    public Long startColumn;
    public ChecksCreateRequestBodyOutputAnnotations withStartColumn(Long startColumn) {
        this.startColumn = startColumn;
        return this;
    }
    @JsonProperty("start_line")
    public Long startLine;
    public ChecksCreateRequestBodyOutputAnnotations withStartLine(Long startLine) {
        this.startLine = startLine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ChecksCreateRequestBodyOutputAnnotations withTitle(String title) {
        this.title = title;
        return this;
    }
}