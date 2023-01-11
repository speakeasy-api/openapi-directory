package openapisdk.models.shared;



/**
 * SuggesterStatus
 * The value of a <code>Suggester</code> and its current status.
**/
public class SuggesterStatus {
    public Suggester options;
    public SuggesterStatus withOptions(Suggester options) {
        this.options = options;
        return this;
    }
    public OptionStatus status;
    public SuggesterStatus withStatus(OptionStatus status) {
        this.status = status;
        return this;
    }
}