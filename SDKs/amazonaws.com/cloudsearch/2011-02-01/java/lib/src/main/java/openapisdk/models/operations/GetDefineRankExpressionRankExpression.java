package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * GetDefineRankExpressionRankExpression
 * A named expression that can be evaluated at search time and used for ranking or thresholding in a search query. 
**/
public class GetDefineRankExpressionRankExpression {
    @SpeakeasyMetadata("queryParam:name=RankExpression")
    public String rankExpression;
    public GetDefineRankExpressionRankExpression withRankExpression(String rankExpression) {
        this.rankExpression = rankExpression;
        return this;
    }
    @SpeakeasyMetadata("queryParam:name=RankName")
    public String rankName;
    public GetDefineRankExpressionRankExpression withRankName(String rankName) {
        this.rankName = rankName;
        return this;
    }
}