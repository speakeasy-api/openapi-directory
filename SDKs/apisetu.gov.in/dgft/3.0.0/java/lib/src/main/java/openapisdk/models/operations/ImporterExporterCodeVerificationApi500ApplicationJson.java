package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImporterExporterCodeVerificationApi500ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum error;
    public ImporterExporterCodeVerificationApi500ApplicationJson withError(ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum errorDescription;
    public ImporterExporterCodeVerificationApi500ApplicationJson withErrorDescription(ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}