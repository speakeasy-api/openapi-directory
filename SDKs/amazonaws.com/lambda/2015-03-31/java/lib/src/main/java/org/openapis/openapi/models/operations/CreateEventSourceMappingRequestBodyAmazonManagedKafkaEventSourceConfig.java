/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateEventSourceMappingRequestBodyAmazonManagedKafkaEventSourceConfig - Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
 */
public class CreateEventSourceMappingRequestBodyAmazonManagedKafkaEventSourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsumerGroupId")
    public String consumerGroupId;

    public CreateEventSourceMappingRequestBodyAmazonManagedKafkaEventSourceConfig withConsumerGroupId(String consumerGroupId) {
        this.consumerGroupId = consumerGroupId;
        return this;
    }
    
    public CreateEventSourceMappingRequestBodyAmazonManagedKafkaEventSourceConfig(){}
}
