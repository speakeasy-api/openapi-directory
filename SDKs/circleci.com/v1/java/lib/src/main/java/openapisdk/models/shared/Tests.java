package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Tests {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tests")
    public TestsTests[] tests;
    public Tests withTests(TestsTests[] tests) {
        this.tests = tests;
        return this;
    }
}