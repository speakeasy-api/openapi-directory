package openapisdk.models.operations;



public class ChecksSetSuitesPreferencesResponse {
    public String contentType;
    public ChecksSetSuitesPreferencesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChecksSetSuitesPreferencesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CheckSuitePreference checkSuitePreference;
    public ChecksSetSuitesPreferencesResponse withCheckSuitePreference(openapisdk.models.shared.CheckSuitePreference checkSuitePreference) {
        this.checkSuitePreference = checkSuitePreference;
        return this;
    }
}