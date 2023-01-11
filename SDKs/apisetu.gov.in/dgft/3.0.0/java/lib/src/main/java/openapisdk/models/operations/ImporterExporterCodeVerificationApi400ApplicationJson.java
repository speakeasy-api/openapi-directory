package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImporterExporterCodeVerificationApi400ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum error;
    public ImporterExporterCodeVerificationApi400ApplicationJson withError(ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum errorDescription;
    public ImporterExporterCodeVerificationApi400ApplicationJson withErrorDescription(ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}