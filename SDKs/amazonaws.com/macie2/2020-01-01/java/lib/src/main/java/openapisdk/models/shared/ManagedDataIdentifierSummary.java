package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManagedDataIdentifierSummary
 * Provides information about a managed data identifier. For additional information, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.
**/
public class ManagedDataIdentifierSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public SensitiveDataItemCategoryEnum category;
    public ManagedDataIdentifierSummary withCategory(SensitiveDataItemCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ManagedDataIdentifierSummary withId(String id) {
        this.id = id;
        return this;
    }
}