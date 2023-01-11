package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateMlModelOutput
 * <p>Represents the output of an <code>UpdateMLModel</code> operation.</p> <p>You can see the updated content by using the <code>GetMLModel</code> operation.</p>
**/
public class UpdateMlModelOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MLModelId")
    public String mlModelId;
    public UpdateMlModelOutput withMlModelId(String mlModelId) {
        this.mlModelId = mlModelId;
        return this;
    }
}