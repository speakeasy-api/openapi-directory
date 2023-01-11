package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ScalableTarget
 * Represents a scalable target.
**/
public class ScalableTarget {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public ScalableTarget withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonProperty("MaxCapacity")
    public Long maxCapacity;
    public ScalableTarget withMaxCapacity(Long maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    }
    @JsonProperty("MinCapacity")
    public Long minCapacity;
    public ScalableTarget withMinCapacity(Long minCapacity) {
        this.minCapacity = minCapacity;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public ScalableTarget withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public ScalableTarget withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
    @JsonProperty("ScalableDimension")
    public ScalableDimensionEnum scalableDimension;
    public ScalableTarget withScalableDimension(ScalableDimensionEnum scalableDimension) {
        this.scalableDimension = scalableDimension;
        return this;
    }
    @JsonProperty("ServiceNamespace")
    public ServiceNamespaceEnum serviceNamespace;
    public ScalableTarget withServiceNamespace(ServiceNamespaceEnum serviceNamespace) {
        this.serviceNamespace = serviceNamespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SuspendedState")
    public SuspendedState suspendedState;
    public ScalableTarget withSuspendedState(SuspendedState suspendedState) {
        this.suspendedState = suspendedState;
        return this;
    }
}