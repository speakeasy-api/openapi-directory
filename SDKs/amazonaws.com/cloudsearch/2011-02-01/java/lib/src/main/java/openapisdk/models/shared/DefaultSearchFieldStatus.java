package openapisdk.models.shared;



/**
 * DefaultSearchFieldStatus
 * The value of the <code>DefaultSearchField</code> configured for this search domain and its current status.
**/
public class DefaultSearchFieldStatus {
    public String options;
    public DefaultSearchFieldStatus withOptions(String options) {
        this.options = options;
        return this;
    }
    public OptionStatus status;
    public DefaultSearchFieldStatus withStatus(OptionStatus status) {
        this.status = status;
        return this;
    }
}