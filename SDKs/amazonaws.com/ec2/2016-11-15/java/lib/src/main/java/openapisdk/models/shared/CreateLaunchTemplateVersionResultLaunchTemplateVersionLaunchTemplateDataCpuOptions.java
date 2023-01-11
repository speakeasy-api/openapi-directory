package openapisdk.models.shared;



/**
 * CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions
 * The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
public class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions {
    public java.util.Map<String, Object> coreCount;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions withCoreCount(java.util.Map<String, Object> coreCount) {
        this.coreCount = coreCount;
        return this;
    }
    public java.util.Map<String, Object> threadsPerCore;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataCpuOptions withThreadsPerCore(java.util.Map<String, Object> threadsPerCore) {
        this.threadsPerCore = threadsPerCore;
        return this;
    }
}