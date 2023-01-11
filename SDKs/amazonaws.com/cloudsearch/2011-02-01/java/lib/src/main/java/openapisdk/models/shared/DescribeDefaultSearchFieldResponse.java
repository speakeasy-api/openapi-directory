package openapisdk.models.shared;



/**
 * DescribeDefaultSearchFieldResponse
 * A response message that contains the default search field for a search domain.
**/
public class DescribeDefaultSearchFieldResponse {
    public DefaultSearchFieldStatus defaultSearchField;
    public DescribeDefaultSearchFieldResponse withDefaultSearchField(DefaultSearchFieldStatus defaultSearchField) {
        this.defaultSearchField = defaultSearchField;
        return this;
    }
}