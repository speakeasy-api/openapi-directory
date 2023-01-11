package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetClusterlintResults200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("completed_at")
    public OffsetDateTime completedAt;
    public GetClusterlintResults200ApplicationJson withCompletedAt(OffsetDateTime completedAt) {
        this.completedAt = completedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diagnostics")
    public GetClusterlintResults200ApplicationJsonDiagnostics[] diagnostics;
    public GetClusterlintResults200ApplicationJson withDiagnostics(GetClusterlintResults200ApplicationJsonDiagnostics[] diagnostics) {
        this.diagnostics = diagnostics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("requested_at")
    public OffsetDateTime requestedAt;
    public GetClusterlintResults200ApplicationJson withRequestedAt(OffsetDateTime requestedAt) {
        this.requestedAt = requestedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("run_id")
    public String runId;
    public GetClusterlintResults200ApplicationJson withRunId(String runId) {
        this.runId = runId;
        return this;
    }
}