package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PdfToWordsWithLocationResult
 * Response from an OCR to words with location operation.  Includes the confience rating and converted text result, along with the locations of the words in the pages.
**/
public class PdfToWordsWithLocationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OcrPages")
    public OcrPageResultWithWordsWithLocation[] ocrPages;
    public PdfToWordsWithLocationResult withOcrPages(OcrPageResultWithWordsWithLocation[] ocrPages) {
        this.ocrPages = ocrPages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Successful")
    public Boolean successful;
    public PdfToWordsWithLocationResult withSuccessful(Boolean successful) {
        this.successful = successful;
        return this;
    }
}