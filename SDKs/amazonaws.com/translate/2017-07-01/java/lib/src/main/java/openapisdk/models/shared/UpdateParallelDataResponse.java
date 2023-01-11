package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UpdateParallelDataResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LatestUpdateAttemptAt")
    public OffsetDateTime latestUpdateAttemptAt;
    public UpdateParallelDataResponse withLatestUpdateAttemptAt(OffsetDateTime latestUpdateAttemptAt) {
        this.latestUpdateAttemptAt = latestUpdateAttemptAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestUpdateAttemptStatus")
    public ParallelDataStatusEnum latestUpdateAttemptStatus;
    public UpdateParallelDataResponse withLatestUpdateAttemptStatus(ParallelDataStatusEnum latestUpdateAttemptStatus) {
        this.latestUpdateAttemptStatus = latestUpdateAttemptStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateParallelDataResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ParallelDataStatusEnum status;
    public UpdateParallelDataResponse withStatus(ParallelDataStatusEnum status) {
        this.status = status;
        return this;
    }
}