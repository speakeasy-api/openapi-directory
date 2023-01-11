package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FormRelationshipsShare {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public FormRelationshipsShareData data;
    public FormRelationshipsShare withData(FormRelationshipsShareData data) {
        this.data = data;
        return this;
    }
}