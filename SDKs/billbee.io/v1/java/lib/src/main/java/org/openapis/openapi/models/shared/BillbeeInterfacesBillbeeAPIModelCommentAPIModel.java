/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

public class BillbeeInterfacesBillbeeAPIModelCommentAPIModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("Created")
    public OffsetDateTime created;

    public BillbeeInterfacesBillbeeAPIModelCommentAPIModel withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FromCustomer")
    public Boolean fromCustomer;

    public BillbeeInterfacesBillbeeAPIModelCommentAPIModel withFromCustomer(Boolean fromCustomer) {
        this.fromCustomer = fromCustomer;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public Long id;

    public BillbeeInterfacesBillbeeAPIModelCommentAPIModel withId(Long id) {
        this.id = id;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;

    public BillbeeInterfacesBillbeeAPIModelCommentAPIModel withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Text")
    public String text;

    public BillbeeInterfacesBillbeeAPIModelCommentAPIModel withText(String text) {
        this.text = text;
        return this;
    }
    
    public BillbeeInterfacesBillbeeAPIModelCommentAPIModel(){}
}
