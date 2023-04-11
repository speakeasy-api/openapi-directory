import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceCollection } from "./resourcecollection";
import { ResourcePermissionEnum } from "./resourcepermissionenum";
/**
 *  Information about the resource that is being monitored, including the name of the resource, the type of resource, and whether or not permission is given to DevOps Guru to access that resource.
 */
export declare class MonitoredResourceIdentifier extends SpeakeasyBase {
    lastUpdated?: Date;
    monitoredResourceName?: string;
    /**
     *  A collection of Amazon Web Services resources supported by DevOps Guru. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks.
     */
    resourceCollection?: ResourceCollection;
    resourcePermission?: ResourcePermissionEnum;
    type?: string;
}
