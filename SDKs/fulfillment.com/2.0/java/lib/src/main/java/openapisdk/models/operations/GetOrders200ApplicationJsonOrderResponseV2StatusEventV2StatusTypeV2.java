package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionRequiredBy")
    public GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy actionRequiredBy;
    public GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 withActionRequiredBy(GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy actionRequiredBy) {
        this.actionRequiredBy = actionRequiredBy;
        return this;
    }
    @JsonProperty("code")
    public String code;
    public GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("detailCode")
    public String detailCode;
    public GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 withDetailCode(String detailCode) {
        this.detailCode = detailCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isClosed")
    public Boolean isClosed;
    public GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 withIsClosed(Boolean isClosed) {
        this.isClosed = isClosed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 withReason(String reason) {
        this.reason = reason;
        return this;
    }
    @JsonProperty("stage")
    public GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage stage;
    public GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 withStage(GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2Stage stage) {
        this.stage = stage;
        return this;
    }
    @JsonProperty("state")
    public GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State state;
    public GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2 withState(GetOrders200ApplicationJsonOrderResponseV2StatusEventV2StatusTypeV2State state) {
        this.state = state;
        return this;
    }
}