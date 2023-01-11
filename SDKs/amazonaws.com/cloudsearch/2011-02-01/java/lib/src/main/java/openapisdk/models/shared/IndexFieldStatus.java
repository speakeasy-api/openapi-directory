package openapisdk.models.shared;



/**
 * IndexFieldStatus
 * The value of an <code>IndexField</code> and its current status.
**/
public class IndexFieldStatus {
    public IndexField options;
    public IndexFieldStatus withOptions(IndexField options) {
        this.options = options;
        return this;
    }
    public OptionStatus status;
    public IndexFieldStatus withStatus(OptionStatus status) {
        this.status = status;
        return this;
    }
}