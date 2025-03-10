/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateComponentTypeRequestBody {
    /**
     * The component type name.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentTypeName")
    public String componentTypeName;

    public UpdateComponentTypeRequestBody withComponentTypeName(String componentTypeName) {
        this.componentTypeName = componentTypeName;
        return this;
    }
    
    /**
     * The description of the component type.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public UpdateComponentTypeRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * Specifies the component type that this component type extends.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extendsFrom")
    public String[] extendsFrom;

    public UpdateComponentTypeRequestBody withExtendsFrom(String[] extendsFrom) {
        this.extendsFrom = extendsFrom;
        return this;
    }
    
    /**
     * An object that maps strings to the functions in the component type. Each string in the mapping must be unique to this object.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("functions")
    public java.util.Map<String, org.openapis.openapi.models.shared.FunctionRequest> functions;

    public UpdateComponentTypeRequestBody withFunctions(java.util.Map<String, org.openapis.openapi.models.shared.FunctionRequest> functions) {
        this.functions = functions;
        return this;
    }
    
    /**
     * A Boolean value that specifies whether an entity can have more than one component of this type.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSingleton")
    public Boolean isSingleton;

    public UpdateComponentTypeRequestBody withIsSingleton(Boolean isSingleton) {
        this.isSingleton = isSingleton;
        return this;
    }
    
    /**
     * An object that maps strings to the property definitions in the component type. Each string in the mapping must be unique to this object.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyDefinitions")
    public java.util.Map<String, org.openapis.openapi.models.shared.PropertyDefinitionRequest> propertyDefinitions;

    public UpdateComponentTypeRequestBody withPropertyDefinitions(java.util.Map<String, org.openapis.openapi.models.shared.PropertyDefinitionRequest> propertyDefinitions) {
        this.propertyDefinitions = propertyDefinitions;
        return this;
    }
    
    /**
     * The property groups.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyGroups")
    public java.util.Map<String, org.openapis.openapi.models.shared.PropertyGroupRequest> propertyGroups;

    public UpdateComponentTypeRequestBody withPropertyGroups(java.util.Map<String, org.openapis.openapi.models.shared.PropertyGroupRequest> propertyGroups) {
        this.propertyGroups = propertyGroups;
        return this;
    }
    
    public UpdateComponentTypeRequestBody(){}
}
