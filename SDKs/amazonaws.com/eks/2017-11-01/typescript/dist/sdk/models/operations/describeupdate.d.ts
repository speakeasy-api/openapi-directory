import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeUpdateRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the add-on. The name must match one of the names returned by <a href="https://docs.aws.amazon.com/eks/latest/APIReference/API_ListAddons.html"> <code>ListAddons</code> </a>. This parameter is required if the update is an add-on update.
     */
    addonName?: string;
    /**
     * The name of the Amazon EKS cluster associated with the update.
     */
    name: string;
    /**
     * The name of the Amazon EKS node group associated with the update. This parameter is required if the update is a node group update.
     */
    nodegroupName?: string;
    /**
     * The ID of the update to describe.
     */
    updateId: string;
}
export declare class DescribeUpdateResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    describeUpdateResponse?: shared.DescribeUpdateResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServerException
     */
    serverException?: any;
}
