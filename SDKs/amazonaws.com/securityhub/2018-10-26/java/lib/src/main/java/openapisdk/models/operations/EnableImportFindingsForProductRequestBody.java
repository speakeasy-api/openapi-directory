package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnableImportFindingsForProductRequestBody {
    @JsonProperty("ProductArn")
    public String productArn;
    public EnableImportFindingsForProductRequestBody withProductArn(String productArn) {
        this.productArn = productArn;
        return this;
    }
}