package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OcrPageResultWithWordsWithLocation
 * OCR results of a page, including words of text and their location
**/
public class OcrPageResultWithWordsWithLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PageNumber")
    public Integer pageNumber;
    public OcrPageResultWithWordsWithLocation withPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Successful")
    public Boolean successful;
    public OcrPageResultWithWordsWithLocation withSuccessful(Boolean successful) {
        this.successful = successful;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Words")
    public OcrWordElement[] words;
    public OcrPageResultWithWordsWithLocation withWords(OcrWordElement[] words) {
        this.words = words;
        return this;
    }
}