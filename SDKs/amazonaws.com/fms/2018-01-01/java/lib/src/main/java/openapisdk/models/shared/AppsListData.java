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
 * AppsListData
 * An Firewall Manager applications list.
**/
public class AppsListData {
    @JsonProperty("AppsList")
    public App[] appsList;
    public AppsListData withAppsList(App[] appsList) {
        this.appsList = appsList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreateTime")
    public OffsetDateTime createTime;
    public AppsListData withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdateTime")
    public OffsetDateTime lastUpdateTime;
    public AppsListData withLastUpdateTime(OffsetDateTime lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListId")
    public String listId;
    public AppsListData withListId(String listId) {
        this.listId = listId;
        return this;
    }
    @JsonProperty("ListName")
    public String listName;
    public AppsListData withListName(String listName) {
        this.listName = listName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListUpdateToken")
    public String listUpdateToken;
    public AppsListData withListUpdateToken(String listUpdateToken) {
        this.listUpdateToken = listUpdateToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreviousAppsList")
    public java.util.Map<String, App[]> previousAppsList;
    public AppsListData withPreviousAppsList(java.util.Map<String, App[]> previousAppsList) {
        this.previousAppsList = previousAppsList;
        return this;
    }
}