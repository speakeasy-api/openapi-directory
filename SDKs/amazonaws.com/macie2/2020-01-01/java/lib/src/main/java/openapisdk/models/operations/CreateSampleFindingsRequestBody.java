package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSampleFindingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("findingTypes")
    public openapisdk.models.shared.FindingTypeEnum[] findingTypes;
    public CreateSampleFindingsRequestBody withFindingTypes(openapisdk.models.shared.FindingTypeEnum[] findingTypes) {
        this.findingTypes = findingTypes;
        return this;
    }
}