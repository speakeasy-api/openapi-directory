package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TopicSearchResultItemAliases {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic_relation")
    public TopicSearchResultItemAliasesTopicRelation topicRelation;
    public TopicSearchResultItemAliases withTopicRelation(TopicSearchResultItemAliasesTopicRelation topicRelation) {
        this.topicRelation = topicRelation;
        return this;
    }
}