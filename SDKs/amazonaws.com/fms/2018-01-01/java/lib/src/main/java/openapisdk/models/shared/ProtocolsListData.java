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
 * ProtocolsListData
 * An Firewall Manager protocols list.
**/
public class ProtocolsListData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public ProtocolsListData withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdateTime")
    public OffsetDateTime lastUpdateTime;
    public ProtocolsListData withLastUpdateTime(OffsetDateTime lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListId")
    public String listId;
    public ProtocolsListData withListId(String listId) {
        this.listId = listId;
        return this;
    }
    @JsonProperty("ListName")
    public String listName;
    public ProtocolsListData withListName(String listName) {
        this.listName = listName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListUpdateToken")
    public String listUpdateToken;
    public ProtocolsListData withListUpdateToken(String listUpdateToken) {
        this.listUpdateToken = listUpdateToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreviousProtocolsList")
    public java.util.Map<String, String[]> previousProtocolsList;
    public ProtocolsListData withPreviousProtocolsList(java.util.Map<String, String[]> previousProtocolsList) {
        this.previousProtocolsList = previousProtocolsList;
        return this;
    }
    @JsonProperty("ProtocolsList")
    public String[] protocolsList;
    public ProtocolsListData withProtocolsList(String[] protocolsList) {
        this.protocolsList = protocolsList;
        return this;
    }
}