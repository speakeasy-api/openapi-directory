/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



public class EngineDefaults {
    
    public String dbParameterGroupFamily;

    public EngineDefaults withDBParameterGroupFamily(String dbParameterGroupFamily) {
        this.dbParameterGroupFamily = dbParameterGroupFamily;
        return this;
    }
    
    
    public String marker;

    public EngineDefaults withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    
    
    public ParametersList[] parameters;

    public EngineDefaults withParameters(ParametersList[] parameters) {
        this.parameters = parameters;
        return this;
    }
    
    public EngineDefaults(){}
}
