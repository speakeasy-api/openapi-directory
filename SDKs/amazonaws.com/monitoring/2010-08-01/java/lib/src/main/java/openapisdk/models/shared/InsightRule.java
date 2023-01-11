package openapisdk.models.shared;



/**
 * InsightRule
 * This structure contains the definition for a Contributor Insights rule.
**/
public class InsightRule {
    public String definition;
    public InsightRule withDefinition(String definition) {
        this.definition = definition;
        return this;
    }
    public String name;
    public InsightRule withName(String name) {
        this.name = name;
        return this;
    }
    public String schema;
    public InsightRule withSchema(String schema) {
        this.schema = schema;
        return this;
    }
    public String state;
    public InsightRule withState(String state) {
        this.state = state;
        return this;
    }
}