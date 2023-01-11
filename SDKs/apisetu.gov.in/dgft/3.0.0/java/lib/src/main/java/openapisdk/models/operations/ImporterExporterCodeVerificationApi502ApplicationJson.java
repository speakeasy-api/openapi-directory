package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImporterExporterCodeVerificationApi502ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum error;
    public ImporterExporterCodeVerificationApi502ApplicationJson withError(ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum errorDescription;
    public ImporterExporterCodeVerificationApi502ApplicationJson withErrorDescription(ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}