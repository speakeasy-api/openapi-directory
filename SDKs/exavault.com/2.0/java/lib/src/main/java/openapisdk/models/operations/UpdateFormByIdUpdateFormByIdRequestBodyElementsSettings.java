package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isRequired")
    public Boolean isRequired;
    public UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings withIsRequired(Boolean isRequired) {
        this.isRequired = isRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("senderEmail")
    public Boolean senderEmail;
    public UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings withSenderEmail(Boolean senderEmail) {
        this.senderEmail = senderEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useAsFolderName")
    public Boolean useAsFolderName;
    public UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings withUseAsFolderName(Boolean useAsFolderName) {
        this.useAsFolderName = useAsFolderName;
        return this;
    }
}