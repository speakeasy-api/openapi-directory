package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FormRelationshipsShareData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public FormRelationshipsShareData withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public FormRelationshipsShareDataTypeEnum type;
    public FormRelationshipsShareData withType(FormRelationshipsShareDataTypeEnum type) {
        this.type = type;
        return this;
    }
}