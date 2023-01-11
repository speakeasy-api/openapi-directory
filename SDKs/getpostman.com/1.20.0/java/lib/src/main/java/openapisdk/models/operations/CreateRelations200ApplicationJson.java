package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateRelations200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contracttest")
    public String[] contracttest;
    public CreateRelations200ApplicationJson withContracttest(String[] contracttest) {
        this.contracttest = contracttest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentation")
    public String[] documentation;
    public CreateRelations200ApplicationJson withDocumentation(String[] documentation) {
        this.documentation = documentation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testsuite")
    public String[] testsuite;
    public CreateRelations200ApplicationJson withTestsuite(String[] testsuite) {
        this.testsuite = testsuite;
        return this;
    }
}