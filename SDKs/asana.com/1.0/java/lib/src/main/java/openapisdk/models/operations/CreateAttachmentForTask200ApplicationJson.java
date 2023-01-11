package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAttachmentForTask200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.AttachmentResponse data;
    public CreateAttachmentForTask200ApplicationJson withData(openapisdk.models.shared.AttachmentResponse data) {
        this.data = data;
        return this;
    }
}