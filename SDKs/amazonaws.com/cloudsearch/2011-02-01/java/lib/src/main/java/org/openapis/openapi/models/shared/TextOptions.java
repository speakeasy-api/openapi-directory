/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * TextOptions - Options that define a text field in the search index.
 */
public class TextOptions {
    
    public String defaultValue;

    public TextOptions withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    
    
    public Boolean facetEnabled;

    public TextOptions withFacetEnabled(Boolean facetEnabled) {
        this.facetEnabled = facetEnabled;
        return this;
    }
    
    
    public Boolean resultEnabled;

    public TextOptions withResultEnabled(Boolean resultEnabled) {
        this.resultEnabled = resultEnabled;
        return this;
    }
    
    
    public String textProcessor;

    public TextOptions withTextProcessor(String textProcessor) {
        this.textProcessor = textProcessor;
        return this;
    }
    
    public TextOptions(){}
}
