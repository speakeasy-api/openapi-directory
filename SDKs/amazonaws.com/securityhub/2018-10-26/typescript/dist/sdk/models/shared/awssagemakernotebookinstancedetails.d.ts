import { SpeakeasyBase } from "../../../internal/utils";
import { AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails } from "./awssagemakernotebookinstancemetadataserviceconfigurationdetails";
/**
 *  Provides details about an Amazon SageMaker notebook instance.
 */
export declare class AwsSageMakerNotebookInstanceDetails extends SpeakeasyBase {
    acceleratorTypes?: string[];
    additionalCodeRepositories?: string[];
    defaultCodeRepository?: string;
    directInternetAccess?: string;
    failureReason?: string;
    instanceMetadataServiceConfiguration?: AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails;
    instanceType?: string;
    kmsKeyId?: string;
    networkInterfaceId?: string;
    notebookInstanceArn?: string;
    notebookInstanceLifecycleConfigName?: string;
    notebookInstanceName?: string;
    notebookInstanceStatus?: string;
    platformIdentifier?: string;
    roleArn?: string;
    rootAccess?: string;
    securityGroups?: string[];
    subnetId?: string;
    url?: string;
    volumeSizeInGB?: number;
}
