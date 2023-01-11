package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PersonDetection
 * <p>Details and path tracking information for a single time a person's path is tracked in a video. Amazon Rekognition operations that track people's paths return an array of <code>PersonDetection</code> objects with elements for each time a person's path is tracked in a video. </p> <p>For more information, see GetPersonTracking in the Amazon Rekognition Developer Guide. </p>
**/
public class PersonDetection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Person")
    public PersonDetail person;
    public PersonDetection withPerson(PersonDetail person) {
        this.person = person;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timestamp")
    public Long timestamp;
    public PersonDetection withTimestamp(Long timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}