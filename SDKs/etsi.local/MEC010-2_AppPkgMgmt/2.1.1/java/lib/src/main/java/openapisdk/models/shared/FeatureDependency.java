package openapisdk.models.shared;



public class FeatureDependency {
    public String featureName;
    public FeatureDependency withFeatureName(String featureName) {
        this.featureName = featureName;
        return this;
    }
    public String version;
    public FeatureDependency withVersion(String version) {
        this.version = version;
        return this;
    }
}