package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImporterExporterCodeVerificationApi503ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum error;
    public ImporterExporterCodeVerificationApi503ApplicationJson withError(ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum errorDescription;
    public ImporterExporterCodeVerificationApi503ApplicationJson withErrorDescription(ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}