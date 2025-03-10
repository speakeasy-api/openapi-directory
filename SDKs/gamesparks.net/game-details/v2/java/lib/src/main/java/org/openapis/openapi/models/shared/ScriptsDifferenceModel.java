/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ScriptsDifferenceModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bind")
    public String bind;

    public ScriptsDifferenceModel withBind(String bind) {
        this.bind = bind;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeType")
    public ScriptsDifferenceModelChangeTypeEnum changeType;

    public ScriptsDifferenceModel withChangeType(ScriptsDifferenceModelChangeTypeEnum changeType) {
        this.changeType = changeType;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileName")
    public String fileName;

    public ScriptsDifferenceModel withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script1")
    public String script1;

    public ScriptsDifferenceModel withScript1(String script1) {
        this.script1 = script1;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("script2")
    public String script2;

    public ScriptsDifferenceModel withScript2(String script2) {
        this.script2 = script2;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;

    public ScriptsDifferenceModel withType(String type) {
        this.type = type;
        return this;
    }
    
    public ScriptsDifferenceModel(){}
}
