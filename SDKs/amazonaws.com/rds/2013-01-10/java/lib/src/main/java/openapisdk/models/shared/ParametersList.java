package openapisdk.models.shared;



public class ParametersList {
    public String allowedValues;
    public ParametersList withAllowedValues(String allowedValues) {
        this.allowedValues = allowedValues;
        return this;
    }
    public ApplyMethodEnum applyMethod;
    public ParametersList withApplyMethod(ApplyMethodEnum applyMethod) {
        this.applyMethod = applyMethod;
        return this;
    }
    public String applyType;
    public ParametersList withApplyType(String applyType) {
        this.applyType = applyType;
        return this;
    }
    public String dataType;
    public ParametersList withDataType(String dataType) {
        this.dataType = dataType;
        return this;
    }
    public String description;
    public ParametersList withDescription(String description) {
        this.description = description;
        return this;
    }
    public Boolean isModifiable;
    public ParametersList withIsModifiable(Boolean isModifiable) {
        this.isModifiable = isModifiable;
        return this;
    }
    public String minimumEngineVersion;
    public ParametersList withMinimumEngineVersion(String minimumEngineVersion) {
        this.minimumEngineVersion = minimumEngineVersion;
        return this;
    }
    public String parameterName;
    public ParametersList withParameterName(String parameterName) {
        this.parameterName = parameterName;
        return this;
    }
    public String parameterValue;
    public ParametersList withParameterValue(String parameterValue) {
        this.parameterValue = parameterValue;
        return this;
    }
    public String source;
    public ParametersList withSource(String source) {
        this.source = source;
        return this;
    }
}