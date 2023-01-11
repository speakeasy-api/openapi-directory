package openapisdk.models.shared;



/**
 * DescribeRankExpressionsResponse
 * A response message that contains the rank expressions for a search domain.
**/
public class DescribeRankExpressionsResponse {
    public RankExpressionStatus[] rankExpressions;
    public DescribeRankExpressionsResponse withRankExpressions(RankExpressionStatus[] rankExpressions) {
        this.rankExpressions = rankExpressions;
        return this;
    }
}