package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TopicSearchResultItemRelated {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic_relation")
    public TopicSearchResultItemRelatedTopicRelation topicRelation;
    public TopicSearchResultItemRelated withTopicRelation(TopicSearchResultItemRelatedTopicRelation topicRelation) {
        this.topicRelation = topicRelation;
        return this;
    }
}