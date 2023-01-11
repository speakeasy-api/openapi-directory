package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PersonMatch
 * Information about a person whose face matches a face(s) in an Amazon Rekognition collection. Includes information about the faces in the Amazon Rekognition collection (<a>FaceMatch</a>), information about the person (<a>PersonDetail</a>), and the time stamp for when the person was detected in a video. An array of <code>PersonMatch</code> objects is returned by <a>GetFaceSearch</a>. 
**/
public class PersonMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaceMatches")
    public FaceMatch[] faceMatches;
    public PersonMatch withFaceMatches(FaceMatch[] faceMatches) {
        this.faceMatches = faceMatches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Person")
    public PersonDetail person;
    public PersonMatch withPerson(PersonDetail person) {
        this.person = person;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Timestamp")
    public Long timestamp;
    public PersonMatch withTimestamp(Long timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}