package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorDetail
 * Details about the error.
**/
public class ErrorDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DetailedErrorCode")
    public String detailedErrorCode;
    public ErrorDetail withDetailedErrorCode(String detailedErrorCode) {
        this.detailedErrorCode = detailedErrorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DetailedErrorMessage")
    public String detailedErrorMessage;
    public ErrorDetail withDetailedErrorMessage(String detailedErrorMessage) {
        this.detailedErrorMessage = detailedErrorMessage;
        return this;
    }
}