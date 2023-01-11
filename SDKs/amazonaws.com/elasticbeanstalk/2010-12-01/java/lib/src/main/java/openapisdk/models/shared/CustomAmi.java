package openapisdk.models.shared;



/**
 * CustomAmi
 * A custom AMI available to platforms.
**/
public class CustomAmi {
    public String imageId;
    public CustomAmi withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    public String virtualizationType;
    public CustomAmi withVirtualizationType(String virtualizationType) {
        this.virtualizationType = virtualizationType;
        return this;
    }
}