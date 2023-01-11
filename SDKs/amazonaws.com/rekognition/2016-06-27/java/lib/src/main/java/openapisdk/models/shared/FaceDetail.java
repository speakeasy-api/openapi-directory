package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FaceDetail
 * <p>Structure containing attributes of the face that the algorithm detected.</p> <p>A <code>FaceDetail</code> object contains either the default facial attributes or all facial attributes. The default attributes are <code>BoundingBox</code>, <code>Confidence</code>, <code>Landmarks</code>, <code>Pose</code>, and <code>Quality</code>.</p> <p> <a>GetFaceDetection</a> is the only Amazon Rekognition Video stored video operation that can return a <code>FaceDetail</code> object with all attributes. To specify which attributes to return, use the <code>FaceAttributes</code> input parameter for <a>StartFaceDetection</a>. The following Amazon Rekognition Video operations return only the default attributes. The corresponding Start operations don't have a <code>FaceAttributes</code> input parameter.</p> <ul> <li> <p>GetCelebrityRecognition</p> </li> <li> <p>GetPersonTracking</p> </li> <li> <p>GetFaceSearch</p> </li> </ul> <p>The Amazon Rekognition Image <a>DetectFaces</a> and <a>IndexFaces</a> operations can return all facial attributes. To specify which attributes to return, use the <code>Attributes</code> input parameter for <code>DetectFaces</code>. For <code>IndexFaces</code>, use the <code>DetectAttributes</code> input parameter.</p>
**/
public class FaceDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AgeRange")
    public AgeRange ageRange;
    public FaceDetail withAgeRange(AgeRange ageRange) {
        this.ageRange = ageRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Beard")
    public Beard beard;
    public FaceDetail withBeard(Beard beard) {
        this.beard = beard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BoundingBox")
    public BoundingBox boundingBox;
    public FaceDetail withBoundingBox(BoundingBox boundingBox) {
        this.boundingBox = boundingBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Confidence")
    public Float confidence;
    public FaceDetail withConfidence(Float confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Emotions")
    public Emotion[] emotions;
    public FaceDetail withEmotions(Emotion[] emotions) {
        this.emotions = emotions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Eyeglasses")
    public Eyeglasses eyeglasses;
    public FaceDetail withEyeglasses(Eyeglasses eyeglasses) {
        this.eyeglasses = eyeglasses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EyesOpen")
    public EyeOpen eyesOpen;
    public FaceDetail withEyesOpen(EyeOpen eyesOpen) {
        this.eyesOpen = eyesOpen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Gender")
    public Gender gender;
    public FaceDetail withGender(Gender gender) {
        this.gender = gender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Landmarks")
    public Landmark[] landmarks;
    public FaceDetail withLandmarks(Landmark[] landmarks) {
        this.landmarks = landmarks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MouthOpen")
    public MouthOpen mouthOpen;
    public FaceDetail withMouthOpen(MouthOpen mouthOpen) {
        this.mouthOpen = mouthOpen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Mustache")
    public Mustache mustache;
    public FaceDetail withMustache(Mustache mustache) {
        this.mustache = mustache;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Pose")
    public Pose pose;
    public FaceDetail withPose(Pose pose) {
        this.pose = pose;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Quality")
    public ImageQuality quality;
    public FaceDetail withQuality(ImageQuality quality) {
        this.quality = quality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Smile")
    public Smile smile;
    public FaceDetail withSmile(Smile smile) {
        this.smile = smile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sunglasses")
    public Sunglasses sunglasses;
    public FaceDetail withSunglasses(Sunglasses sunglasses) {
        this.sunglasses = sunglasses;
        return this;
    }
}