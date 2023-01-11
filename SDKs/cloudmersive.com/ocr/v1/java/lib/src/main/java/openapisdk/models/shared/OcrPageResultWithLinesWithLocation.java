package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OcrPageResultWithLinesWithLocation
 * OCR results of a page, including lines of text and their location
**/
public class OcrPageResultWithLinesWithLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Lines")
    public OcrLineElement[] lines;
    public OcrPageResultWithLinesWithLocation withLines(OcrLineElement[] lines) {
        this.lines = lines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageNumber")
    public Integer pageNumber;
    public OcrPageResultWithLinesWithLocation withPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Successful")
    public Boolean successful;
    public OcrPageResultWithLinesWithLocation withSuccessful(Boolean successful) {
        this.successful = successful;
        return this;
    }
}