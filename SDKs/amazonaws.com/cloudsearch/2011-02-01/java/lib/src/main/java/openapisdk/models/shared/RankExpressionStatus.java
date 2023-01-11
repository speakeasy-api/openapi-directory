package openapisdk.models.shared;



/**
 * RankExpressionStatus
 * The value of a <code>RankExpression</code> and its current status.
**/
public class RankExpressionStatus {
    public NamedRankExpression options;
    public RankExpressionStatus withOptions(NamedRankExpression options) {
        this.options = options;
        return this;
    }
    public OptionStatus status;
    public RankExpressionStatus withStatus(OptionStatus status) {
        this.status = status;
        return this;
    }
}