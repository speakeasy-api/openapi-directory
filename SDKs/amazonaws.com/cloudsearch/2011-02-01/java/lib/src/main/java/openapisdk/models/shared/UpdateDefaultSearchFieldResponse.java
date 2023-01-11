package openapisdk.models.shared;



/**
 * UpdateDefaultSearchFieldResponse
 * A response message that contains the status of an updated default search field.
**/
public class UpdateDefaultSearchFieldResponse {
    public DefaultSearchFieldStatus defaultSearchField;
    public UpdateDefaultSearchFieldResponse withDefaultSearchField(DefaultSearchFieldStatus defaultSearchField) {
        this.defaultSearchField = defaultSearchField;
        return this;
    }
}