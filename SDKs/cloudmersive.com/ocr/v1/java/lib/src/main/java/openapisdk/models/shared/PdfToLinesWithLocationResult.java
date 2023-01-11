package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PdfToLinesWithLocationResult
 * Response from an OCR to lines with location operation.  Includes the confience rating and converted text result, along with the locations of the lines in the pages.
**/
public class PdfToLinesWithLocationResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OcrPages")
    public OcrPageResultWithLinesWithLocation[] ocrPages;
    public PdfToLinesWithLocationResult withOcrPages(OcrPageResultWithLinesWithLocation[] ocrPages) {
        this.ocrPages = ocrPages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Successful")
    public Boolean successful;
    public PdfToLinesWithLocationResult withSuccessful(Boolean successful) {
        this.successful = successful;
        return this;
    }
}