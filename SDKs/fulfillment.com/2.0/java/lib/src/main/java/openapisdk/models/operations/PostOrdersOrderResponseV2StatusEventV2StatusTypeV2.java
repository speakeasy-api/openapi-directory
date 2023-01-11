package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionRequiredBy")
    public PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy actionRequiredBy;
    public PostOrdersOrderResponseV2StatusEventV2StatusTypeV2 withActionRequiredBy(PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy actionRequiredBy) {
        this.actionRequiredBy = actionRequiredBy;
        return this;
    }
    @JsonProperty("code")
    public String code;
    public PostOrdersOrderResponseV2StatusEventV2StatusTypeV2 withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public PostOrdersOrderResponseV2StatusEventV2StatusTypeV2 withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("detailCode")
    public String detailCode;
    public PostOrdersOrderResponseV2StatusEventV2StatusTypeV2 withDetailCode(String detailCode) {
        this.detailCode = detailCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PostOrdersOrderResponseV2StatusEventV2StatusTypeV2 withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isClosed")
    public Boolean isClosed;
    public PostOrdersOrderResponseV2StatusEventV2StatusTypeV2 withIsClosed(Boolean isClosed) {
        this.isClosed = isClosed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PostOrdersOrderResponseV2StatusEventV2StatusTypeV2 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public PostOrdersOrderResponseV2StatusEventV2StatusTypeV2 withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("stage")
    public PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage stage;
    public PostOrdersOrderResponseV2StatusEventV2StatusTypeV2 withStage(PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage stage) {
        this.stage = stage;
        return this;
    }
    @JsonProperty("state")
    public PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State state;
    public PostOrdersOrderResponseV2StatusEventV2StatusTypeV2 withState(PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State state) {
        this.state = state;
        return this;
    }
}