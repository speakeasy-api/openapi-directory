package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetChatHistoryUsingPost200ApplicationJsonDataMessages {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public GetChatHistoryUsingPost200ApplicationJsonDataMessages withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public Long time;
    public GetChatHistoryUsingPost200ApplicationJsonDataMessages withTime(Long time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public GetChatHistoryUsingPost200ApplicationJsonDataMessages withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userName")
    public String userName;
    public GetChatHistoryUsingPost200ApplicationJsonDataMessages withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}