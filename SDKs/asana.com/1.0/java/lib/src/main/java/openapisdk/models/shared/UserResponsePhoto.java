package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserResponsePhoto
 * A map of the user’s profile photo in various sizes, or null if no photo is set. Sizes provided are 21, 27, 36, 60, 128, and 1024. All images are in PNG format, except for 1024 (which is in JPEG format).
**/
public class UserResponsePhoto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_1024x1024")
    public String image1024x1024;
    public UserResponsePhoto withImage1024x1024(String image1024x1024) {
        this.image1024x1024 = image1024x1024;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_128x128")
    public String image128x128;
    public UserResponsePhoto withImage128x128(String image128x128) {
        this.image128x128 = image128x128;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_21x21")
    public String image21x21;
    public UserResponsePhoto withImage21x21(String image21x21) {
        this.image21x21 = image21x21;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_27x27")
    public String image27x27;
    public UserResponsePhoto withImage27x27(String image27x27) {
        this.image27x27 = image27x27;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_36x36")
    public String image36x36;
    public UserResponsePhoto withImage36x36(String image36x36) {
        this.image36x36 = image36x36;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_60x60")
    public String image60x60;
    public UserResponsePhoto withImage60x60(String image60x60) {
        this.image60x60 = image60x60;
        return this;
    }
}