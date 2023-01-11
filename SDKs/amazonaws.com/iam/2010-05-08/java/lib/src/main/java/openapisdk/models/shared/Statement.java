package openapisdk.models.shared;



/**
 * Statement
 * <p>Contains a reference to a <code>Statement</code> element in a policy document that determines the result of the simulation.</p> <p>This data type is used by the <code>MatchedStatements</code> member of the <code> <a>EvaluationResult</a> </code> type.</p>
**/
public class Statement {
    public Position endPosition;
    public Statement withEndPosition(Position endPosition) {
        this.endPosition = endPosition;
        return this;
    }
    public String sourcePolicyId;
    public Statement withSourcePolicyId(String sourcePolicyId) {
        this.sourcePolicyId = sourcePolicyId;
        return this;
    }
    public PolicySourceTypeEnum sourcePolicyType;
    public Statement withSourcePolicyType(PolicySourceTypeEnum sourcePolicyType) {
        this.sourcePolicyType = sourcePolicyType;
        return this;
    }
    public Position startPosition;
    public Statement withStartPosition(Position startPosition) {
        this.startPosition = startPosition;
        return this;
    }
}