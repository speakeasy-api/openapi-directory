/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * Error - The type that defines the fields that can be returned in an error.
 */
public class Error {
    /**
     * This string value indicates the error category. There are three categories of errors: request errors, application errors, and system errors. 
     */
    
    public String category;

    public Error withCategory(String category) {
        this.category = category;
        return this;
    }
    
    /**
     * The name of the primary system where the error occurred. This is relevant for application errors.
     */
    
    public String domain;

    public Error withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    
    /**
     * A unique code that identifies the particular error or warning that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.
     */
    
    public Long errorId;

    public Error withErrorId(Long errorId) {
        this.errorId = errorId;
        return this;
    }
    
    /**
     * An array of reference IDs that identify the specific request elements most closely associated to the error or warning, if any.
     */
    
    public String[] inputRefIds;

    public Error withInputRefIds(String[] inputRefIds) {
        this.inputRefIds = inputRefIds;
        return this;
    }
    
    /**
     * A detailed description of the condition that caused the error or warning, and information on what to do to correct the problem.
     */
    
    public String longMessage;

    public Error withLongMessage(String longMessage) {
        this.longMessage = longMessage;
        return this;
    }
    
    /**
     * A description of the condition that caused the error or warning.
     */
    
    public String message;

    public Error withMessage(String message) {
        this.message = message;
        return this;
    }
    
    /**
     * An array of reference IDs that identify the specific response elements most closely associated to the error or warning, if any.
     */
    
    public String[] outputRefIds;

    public Error withOutputRefIds(String[] outputRefIds) {
        this.outputRefIds = outputRefIds;
        return this;
    }
    
    /**
     * An array of warning and error messages that return one or more variables contextual information about the error or warning. This is often the field or value that triggered the error or warning.
     */
    
    public ErrorParameter[] parameters;

    public Error withParameters(ErrorParameter[] parameters) {
        this.parameters = parameters;
        return this;
    }
    
    /**
     * The name of the subdomain in which the error or warning occurred.
     */
    
    public String subdomain;

    public Error withSubdomain(String subdomain) {
        this.subdomain = subdomain;
        return this;
    }
    
    public Error(){}
}
