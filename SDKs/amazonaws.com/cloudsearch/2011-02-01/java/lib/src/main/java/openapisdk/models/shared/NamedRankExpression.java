package openapisdk.models.shared;



/**
 * NamedRankExpression
 * A named expression that can be evaluated at search time and used for ranking or thresholding in a search query. 
**/
public class NamedRankExpression {
    public String rankExpression;
    public NamedRankExpression withRankExpression(String rankExpression) {
        this.rankExpression = rankExpression;
        return this;
    }
    public String rankName;
    public NamedRankExpression withRankName(String rankName) {
        this.rankName = rankName;
        return this;
    }
}