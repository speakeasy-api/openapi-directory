/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * ListSAMLProvidersResponse - Contains the response to a successful &lt;a&gt;ListSAMLProviders&lt;/a&gt; request. 
 */
public class ListSAMLProvidersResponse {
    
    public SAMLProviderListEntry[] samlProviderList;

    public ListSAMLProvidersResponse withSAMLProviderList(SAMLProviderListEntry[] samlProviderList) {
        this.samlProviderList = samlProviderList;
        return this;
    }
    
    public ListSAMLProvidersResponse(){}
}
