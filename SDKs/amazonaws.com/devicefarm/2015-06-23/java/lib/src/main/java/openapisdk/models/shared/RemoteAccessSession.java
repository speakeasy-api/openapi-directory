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
 * RemoteAccessSession
 * Represents information about the remote access session.
**/
public class RemoteAccessSession {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public RemoteAccessSession withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingMethod")
    public BillingMethodEnum billingMethod;
    public RemoteAccessSession withBillingMethod(BillingMethodEnum billingMethod) {
        this.billingMethod = billingMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public RemoteAccessSession withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public RemoteAccessSession withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device")
    public Device device;
    public RemoteAccessSession withDevice(Device device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceMinutes")
    public DeviceMinutes deviceMinutes;
    public RemoteAccessSession withDeviceMinutes(DeviceMinutes deviceMinutes) {
        this.deviceMinutes = deviceMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceUdid")
    public String deviceUdid;
    public RemoteAccessSession withDeviceUdid(String deviceUdid) {
        this.deviceUdid = deviceUdid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpoint")
    public String endpoint;
    public RemoteAccessSession withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostAddress")
    public String hostAddress;
    public RemoteAccessSession withHostAddress(String hostAddress) {
        this.hostAddress = hostAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceArn")
    public String instanceArn;
    public RemoteAccessSession withInstanceArn(String instanceArn) {
        this.instanceArn = instanceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interactionMode")
    public InteractionModeEnum interactionMode;
    public RemoteAccessSession withInteractionMode(InteractionModeEnum interactionMode) {
        this.interactionMode = interactionMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public RemoteAccessSession withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public RemoteAccessSession withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteDebugEnabled")
    public Boolean remoteDebugEnabled;
    public RemoteAccessSession withRemoteDebugEnabled(Boolean remoteDebugEnabled) {
        this.remoteDebugEnabled = remoteDebugEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteRecordAppArn")
    public String remoteRecordAppArn;
    public RemoteAccessSession withRemoteRecordAppArn(String remoteRecordAppArn) {
        this.remoteRecordAppArn = remoteRecordAppArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteRecordEnabled")
    public Boolean remoteRecordEnabled;
    public RemoteAccessSession withRemoteRecordEnabled(Boolean remoteRecordEnabled) {
        this.remoteRecordEnabled = remoteRecordEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public ExecutionResultEnum result;
    public RemoteAccessSession withResult(ExecutionResultEnum result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipAppResign")
    public Boolean skipAppResign;
    public RemoteAccessSession withSkipAppResign(Boolean skipAppResign) {
        this.skipAppResign = skipAppResign;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("started")
    public OffsetDateTime started;
    public RemoteAccessSession withStarted(OffsetDateTime started) {
        this.started = started;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ExecutionStatusEnum status;
    public RemoteAccessSession withStatus(ExecutionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("stopped")
    public OffsetDateTime stopped;
    public RemoteAccessSession withStopped(OffsetDateTime stopped) {
        this.stopped = stopped;
        return this;
    }
}