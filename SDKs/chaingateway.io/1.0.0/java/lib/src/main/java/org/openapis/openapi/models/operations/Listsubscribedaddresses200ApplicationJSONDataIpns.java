/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Listsubscribedaddresses200ApplicationJSONDataIpns {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bbid")
    public Double bbid;

    public Listsubscribedaddresses200ApplicationJSONDataIpns withBbid(Double bbid) {
        this.bbid = bbid;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contractaddress")
    public String contractaddress;

    public Listsubscribedaddresses200ApplicationJSONDataIpns withContractaddress(String contractaddress) {
        this.contractaddress = contractaddress;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public Object from;

    public Listsubscribedaddresses200ApplicationJSONDataIpns withFrom(Object from) {
        this.from = from;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public Listsubscribedaddresses200ApplicationJSONDataIpns withId(String id) {
        this.id = id;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;

    public Listsubscribedaddresses200ApplicationJSONDataIpns withTo(String to) {
        this.to = to;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenId")
    public Object tokenId;

    public Listsubscribedaddresses200ApplicationJSONDataIpns withTokenId(Object tokenId) {
        this.tokenId = tokenId;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;

    public Listsubscribedaddresses200ApplicationJSONDataIpns withType(String type) {
        this.type = type;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;

    public Listsubscribedaddresses200ApplicationJSONDataIpns withUrl(String url) {
        this.url = url;
        return this;
    }
    
    public Listsubscribedaddresses200ApplicationJSONDataIpns(){}
}
