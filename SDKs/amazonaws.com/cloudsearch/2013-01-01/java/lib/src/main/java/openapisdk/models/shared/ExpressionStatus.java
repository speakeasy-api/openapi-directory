package openapisdk.models.shared;



/**
 * ExpressionStatus
 * The value of an <code>Expression</code> and its current status.
**/
public class ExpressionStatus {
    public Expression options;
    public ExpressionStatus withOptions(Expression options) {
        this.options = options;
        return this;
    }
    public OptionStatus status;
    public ExpressionStatus withStatus(OptionStatus status) {
        this.status = status;
        return this;
    }
}