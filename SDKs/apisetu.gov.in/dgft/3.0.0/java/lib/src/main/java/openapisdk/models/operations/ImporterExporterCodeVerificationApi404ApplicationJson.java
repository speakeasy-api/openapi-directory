package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImporterExporterCodeVerificationApi404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum error;
    public ImporterExporterCodeVerificationApi404ApplicationJson withError(ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorDescription")
    public ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum errorDescription;
    public ImporterExporterCodeVerificationApi404ApplicationJson withErrorDescription(ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}