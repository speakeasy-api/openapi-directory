import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object representing a Kubernetes label change for a managed node group.
 */
export declare class UpdateNodegroupConfigRequestBodyLabels extends SpeakeasyBase {
    addOrUpdateLabels?: Record<string, string>;
    removeLabels?: string[];
}
/**
 * An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
 */
export declare class UpdateNodegroupConfigRequestBodyScalingConfig extends SpeakeasyBase {
    desiredSize?: number;
    maxSize?: number;
    minSize?: number;
}
/**
 * An object representing the details of an update to a taints payload. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>.
 */
export declare class UpdateNodegroupConfigRequestBodyTaints extends SpeakeasyBase {
    addOrUpdateTaints?: shared.Taint[];
    removeTaints?: shared.Taint[];
}
/**
 * The node group update configuration.
 */
export declare class UpdateNodegroupConfigRequestBodyUpdateConfig extends SpeakeasyBase {
    maxUnavailable?: number;
    maxUnavailablePercentage?: number;
}
export declare class UpdateNodegroupConfigRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken?: string;
    /**
     * An object representing a Kubernetes label change for a managed node group.
     */
    labels?: UpdateNodegroupConfigRequestBodyLabels;
    /**
     * An object representing the scaling configuration details for the Auto Scaling group that is associated with your node group. When creating a node group, you must specify all or none of the properties. When updating a node group, you can specify any or none of the properties.
     */
    scalingConfig?: UpdateNodegroupConfigRequestBodyScalingConfig;
    /**
     * An object representing the details of an update to a taints payload. For more information, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/node-taints-managed-node-groups.html">Node taints on managed node groups</a>.
     */
    taints?: UpdateNodegroupConfigRequestBodyTaints;
    /**
     * The node group update configuration.
     */
    updateConfig?: UpdateNodegroupConfigRequestBodyUpdateConfig;
}
export declare class UpdateNodegroupConfigRequest extends SpeakeasyBase {
    requestBody: UpdateNodegroupConfigRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the Amazon EKS cluster that the managed node group resides in.
     */
    name: string;
    /**
     * The name of the managed node group to update.
     */
    nodegroupName: string;
}
export declare class UpdateNodegroupConfigResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateNodegroupConfigResponse?: shared.UpdateNodegroupConfigResponse;
}
