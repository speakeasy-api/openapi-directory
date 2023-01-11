package openapisdk.models.shared;



/**
 * DefineRankExpressionResponse
 * A response message that contains the status of an updated <code>RankExpression</code>.
**/
public class DefineRankExpressionResponse {
    public RankExpressionStatus rankExpression;
    public DefineRankExpressionResponse withRankExpression(RankExpressionStatus rankExpression) {
        this.rankExpression = rankExpression;
        return this;
    }
}