package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListMultipartUploadsOutput
 * Contains the Amazon S3 Glacier response to your request.
**/
public class ListMultipartUploadsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public ListMultipartUploadsOutput withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UploadsList")
    public UploadListElement[] uploadsList;
    public ListMultipartUploadsOutput withUploadsList(UploadListElement[] uploadsList) {
        this.uploadsList = uploadsList;
        return this;
    }
}