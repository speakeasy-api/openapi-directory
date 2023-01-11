package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ImportFindingsError
 * The list of the findings that cannot be imported. For each finding, the list provides the error.
**/
public class ImportFindingsError {
    @JsonProperty("ErrorCode")
    public String errorCode;
    public ImportFindingsError withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public ImportFindingsError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonProperty("Id")
    public String id;
    public ImportFindingsError withId(String id) {
        this.id = id;
        return this;
    }
}