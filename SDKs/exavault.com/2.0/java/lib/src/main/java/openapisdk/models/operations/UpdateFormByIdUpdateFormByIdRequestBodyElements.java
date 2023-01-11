package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFormByIdUpdateFormByIdRequestBodyElements {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public UpdateFormByIdUpdateFormByIdRequestBodyElements withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateFormByIdUpdateFormByIdRequestBodyElements withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order")
    public Long order;
    public UpdateFormByIdUpdateFormByIdRequestBodyElements withOrder(Long order) {
        this.order = order;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings settings;
    public UpdateFormByIdUpdateFormByIdRequestBodyElements withSettings(UpdateFormByIdUpdateFormByIdRequestBodyElementsSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UpdateFormByIdUpdateFormByIdRequestBodyElementsTypeEnum type;
    public UpdateFormByIdUpdateFormByIdRequestBodyElements withType(UpdateFormByIdUpdateFormByIdRequestBodyElementsTypeEnum type) {
        this.type = type;
        return this;
    }
}