package openapisdk.models.shared;



/**
 * ResourceSpecificResult
 * <p>Contains the result of the simulation of a single API operation call on a single resource.</p> <p>This data type is used by a member of the <a>EvaluationResult</a> data type.</p>
**/
public class ResourceSpecificResult {
    public java.util.Map<String, String> evalDecisionDetails;
    public ResourceSpecificResult withEvalDecisionDetails(java.util.Map<String, String> evalDecisionDetails) {
        this.evalDecisionDetails = evalDecisionDetails;
        return this;
    }
    public PolicyEvaluationDecisionTypeEnum evalResourceDecision;
    public ResourceSpecificResult withEvalResourceDecision(PolicyEvaluationDecisionTypeEnum evalResourceDecision) {
        this.evalResourceDecision = evalResourceDecision;
        return this;
    }
    public String evalResourceName;
    public ResourceSpecificResult withEvalResourceName(String evalResourceName) {
        this.evalResourceName = evalResourceName;
        return this;
    }
    public Statement[] matchedStatements;
    public ResourceSpecificResult withMatchedStatements(Statement[] matchedStatements) {
        this.matchedStatements = matchedStatements;
        return this;
    }
    public String[] missingContextValues;
    public ResourceSpecificResult withMissingContextValues(String[] missingContextValues) {
        this.missingContextValues = missingContextValues;
        return this;
    }
    public PermissionsBoundaryDecisionDetail permissionsBoundaryDecisionDetail;
    public ResourceSpecificResult withPermissionsBoundaryDecisionDetail(PermissionsBoundaryDecisionDetail permissionsBoundaryDecisionDetail) {
        this.permissionsBoundaryDecisionDetail = permissionsBoundaryDecisionDetail;
        return this;
    }
}