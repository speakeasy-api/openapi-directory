/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPreparedStatementOutput - Success
 */
public class GetPreparedStatementOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreparedStatement")
    public PreparedStatement preparedStatement;

    public GetPreparedStatementOutput withPreparedStatement(PreparedStatement preparedStatement) {
        this.preparedStatement = preparedStatement;
        return this;
    }
    
    public GetPreparedStatementOutput(){}
}
