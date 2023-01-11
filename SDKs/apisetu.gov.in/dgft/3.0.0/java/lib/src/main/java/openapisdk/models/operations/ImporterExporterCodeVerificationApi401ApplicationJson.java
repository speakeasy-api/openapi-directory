package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImporterExporterCodeVerificationApi401ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum error;
    public ImporterExporterCodeVerificationApi401ApplicationJson withError(ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum errorDescription;
    public ImporterExporterCodeVerificationApi401ApplicationJson withErrorDescription(ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}