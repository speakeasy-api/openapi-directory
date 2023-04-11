import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteNodegroupRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the Amazon EKS cluster that is associated with your node group.
     */
    name: string;
    /**
     * The name of the node group to delete.
     */
    nodegroupName: string;
}
export declare class DeleteNodegroupResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteNodegroupResponse?: shared.DeleteNodegroupResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
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
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
