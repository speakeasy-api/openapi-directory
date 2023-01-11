package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Ec2Configuration
 * <p>Provides information used to select Amazon Machine Images (AMIs) for instances in the compute environment. If <code>Ec2Configuration</code> isn't specified, the default is currently <code>ECS_AL1</code> (<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#alami">Amazon Linux</a>) for non-GPU, non AWSGraviton instances. Starting on March 31, 2021, this default will be changing to <code>ECS_AL2</code> (<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html#al2ami">Amazon Linux 2</a>).</p> <note> <p>This object isn't applicable to jobs that are running on Fargate resources.</p> </note>
**/
public class Ec2Configuration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageIdOverride")
    public String imageIdOverride;
    public Ec2Configuration withImageIdOverride(String imageIdOverride) {
        this.imageIdOverride = imageIdOverride;
        return this;
    }
    @JsonProperty("imageType")
    public String imageType;
    public Ec2Configuration withImageType(String imageType) {
        this.imageType = imageType;
        return this;
    }
}