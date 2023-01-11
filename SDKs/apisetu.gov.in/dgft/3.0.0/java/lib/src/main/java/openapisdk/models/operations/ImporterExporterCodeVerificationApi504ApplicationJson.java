package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImporterExporterCodeVerificationApi504ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum error;
    public ImporterExporterCodeVerificationApi504ApplicationJson withError(ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum errorDescription;
    public ImporterExporterCodeVerificationApi504ApplicationJson withErrorDescription(ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}