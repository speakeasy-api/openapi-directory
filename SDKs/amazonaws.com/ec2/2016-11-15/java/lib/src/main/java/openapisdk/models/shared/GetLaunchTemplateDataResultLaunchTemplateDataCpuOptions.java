package openapisdk.models.shared;



/**
 * GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions
 * The CPU options for the instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-optimize-cpu.html">Optimizing CPU options</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
public class GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions {
    public java.util.Map<String, Object> coreCount;
    public GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions withCoreCount(java.util.Map<String, Object> coreCount) {
        this.coreCount = coreCount;
        return this;
    }
    public java.util.Map<String, Object> threadsPerCore;
    public GetLaunchTemplateDataResultLaunchTemplateDataCpuOptions withThreadsPerCore(java.util.Map<String, Object> threadsPerCore) {
        this.threadsPerCore = threadsPerCore;
        return this;
    }
}