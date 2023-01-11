package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleCollection200ApplicationJsonCollectionItemRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formdata")
    public Object[] formdata;
    public SingleCollection200ApplicationJsonCollectionItemRequestBody withFormdata(Object[] formdata) {
        this.formdata = formdata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mode")
    public String mode;
    public SingleCollection200ApplicationJsonCollectionItemRequestBody withMode(String mode) {
        this.mode = mode;
        return this;
    }
}