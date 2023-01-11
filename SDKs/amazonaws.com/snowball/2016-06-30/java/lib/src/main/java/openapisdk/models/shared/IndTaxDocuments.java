package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IndTaxDocuments
 * The tax documents required in AWS Regions in India.
**/
public class IndTaxDocuments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GSTIN")
    public String gstin;
    public IndTaxDocuments withGstin(String gstin) {
        this.gstin = gstin;
        return this;
    }
}