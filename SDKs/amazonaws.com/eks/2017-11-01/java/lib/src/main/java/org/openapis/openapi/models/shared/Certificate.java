/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Certificate - An object representing the &lt;code&gt;certificate-authority-data&lt;/code&gt; for your cluster.
 */
public class Certificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;

    public Certificate withData(String data) {
        this.data = data;
        return this;
    }
    
    public Certificate(){}
}
