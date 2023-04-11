import { SpeakeasyBase } from "../../../internal/utils";
import { FileCacheFailureDetails } from "./filecachefailuredetails";
import { FileCacheLifecycleEnum } from "./filecachelifecycleenum";
import { FileCacheLustreConfiguration } from "./filecachelustreconfiguration";
import { FileCacheTypeEnum } from "./filecachetypeenum";
/**
 * A description of a specific Amazon File Cache resource, which is a response object from the <code>DescribeFileCaches</code> operation.
 */
export declare class FileCache extends SpeakeasyBase {
    /**
     * The time that the resource was created, in seconds (since 1970-01-01T00:00:00Z), also known as Unix time.
     */
    creationTime?: Date;
    dnsName?: string;
    dataRepositoryAssociationIds?: string[];
    failureDetails?: FileCacheFailureDetails;
    fileCacheId?: string;
    fileCacheType?: FileCacheTypeEnum;
    fileCacheTypeVersion?: string;
    kmsKeyId?: string;
    lifecycle?: FileCacheLifecycleEnum;
    lustreConfiguration?: FileCacheLustreConfiguration;
    /**
     * A list of network interface IDs.
     */
    networkInterfaceIds?: string[];
    /**
     * An Amazon Web Services account ID. This ID is a 12-digit number that you use to construct Amazon Resource Names (ARNs) for resources.
     */
    ownerId?: string;
    /**
     * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
     */
    resourceARN?: string;
    storageCapacity?: number;
    /**
     * A list of subnet IDs that the cache will be accessible from. You can specify only one subnet ID in a call to the <code>CreateFileCache</code> operation.
     */
    subnetIds?: string[];
    /**
     * The ID of your virtual private cloud (VPC). For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html">VPC and subnets</a> in the <i>Amazon VPC User Guide</i>.
     */
    vpcId?: string;
}
