package openapisdk.models.shared;



/**
 * DeleteRankExpressionResponse
 * A response message that contains the status of a deleted <code>RankExpression</code>.
**/
public class DeleteRankExpressionResponse {
    public RankExpressionStatus rankExpression;
    public DeleteRankExpressionResponse withRankExpression(RankExpressionStatus rankExpression) {
        this.rankExpression = rankExpression;
        return this;
    }
}