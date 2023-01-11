package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnumOptionInsertRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("after_enum_option")
    public String afterEnumOption;
    public EnumOptionInsertRequest withAfterEnumOption(String afterEnumOption) {
        this.afterEnumOption = afterEnumOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("before_enum_option")
    public String beforeEnumOption;
    public EnumOptionInsertRequest withBeforeEnumOption(String beforeEnumOption) {
        this.beforeEnumOption = beforeEnumOption;
        return this;
    }
    @JsonProperty("enum_option")
    public String enumOption;
    public EnumOptionInsertRequest withEnumOption(String enumOption) {
        this.enumOption = enumOption;
        return this;
    }
}