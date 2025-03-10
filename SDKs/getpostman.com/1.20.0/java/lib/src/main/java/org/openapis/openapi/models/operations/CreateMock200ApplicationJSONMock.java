/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateMock200ApplicationJSONMock {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public String collection;

    public CreateMock200ApplicationJSONMock withCollection(String collection) {
        this.collection = collection;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public String environment;

    public CreateMock200ApplicationJSONMock withEnvironment(String environment) {
        this.environment = environment;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;

    public CreateMock200ApplicationJSONMock withId(String id) {
        this.id = id;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mockUrl")
    public String mockUrl;

    public CreateMock200ApplicationJSONMock withMockUrl(String mockUrl) {
        this.mockUrl = mockUrl;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public String owner;

    public CreateMock200ApplicationJSONMock withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;

    public CreateMock200ApplicationJSONMock withUid(String uid) {
        this.uid = uid;
        return this;
    }
    
    public CreateMock200ApplicationJSONMock(){}
}
