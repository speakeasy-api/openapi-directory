package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTestSuiteRelations200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testsuite")
    public GetTestSuiteRelations200ApplicationJsonTestsuite[] testsuite;
    public GetTestSuiteRelations200ApplicationJson withTestsuite(GetTestSuiteRelations200ApplicationJsonTestsuite[] testsuite) {
        this.testsuite = testsuite;
        return this;
    }
}