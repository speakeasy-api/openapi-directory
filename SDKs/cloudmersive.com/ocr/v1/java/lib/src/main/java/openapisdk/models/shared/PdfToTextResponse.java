package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PdfToTextResponse
 * Response from an OCR to text operation.  Includes the confidence rating and converted text result.
**/
public class PdfToTextResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OcrPages")
    public OcrPageResult[] ocrPages;
    public PdfToTextResponse withOcrPages(OcrPageResult[] ocrPages) {
        this.ocrPages = ocrPages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Successful")
    public Boolean successful;
    public PdfToTextResponse withSuccessful(Boolean successful) {
        this.successful = successful;
        return this;
    }
}