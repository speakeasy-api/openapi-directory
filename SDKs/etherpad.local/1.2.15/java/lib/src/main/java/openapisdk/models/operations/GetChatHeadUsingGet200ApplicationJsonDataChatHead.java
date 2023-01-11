package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetChatHeadUsingGet200ApplicationJsonDataChatHead {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public GetChatHeadUsingGet200ApplicationJsonDataChatHead withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public Long time;
    public GetChatHeadUsingGet200ApplicationJsonDataChatHead withTime(Long time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public GetChatHeadUsingGet200ApplicationJsonDataChatHead withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userName")
    public String userName;
    public GetChatHeadUsingGet200ApplicationJsonDataChatHead withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}