package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InsertEnumOptionForCustomFieldRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.EnumOptionInsertRequest data;
    public InsertEnumOptionForCustomFieldRequestBody withData(openapisdk.models.shared.EnumOptionInsertRequest data) {
        this.data = data;
        return this;
    }
}