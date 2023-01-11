package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApiVersionRequestBodyVersionSourceRelations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentation")
    public Boolean documentation;
    public CreateApiVersionRequestBodyVersionSourceRelations withDocumentation(Boolean documentation) {
        this.documentation = documentation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mock")
    public Boolean mock;
    public CreateApiVersionRequestBodyVersionSourceRelations withMock(Boolean mock) {
        this.mock = mock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitor")
    public Boolean monitor;
    public CreateApiVersionRequestBodyVersionSourceRelations withMonitor(Boolean monitor) {
        this.monitor = monitor;
        return this;
    }
}