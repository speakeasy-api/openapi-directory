import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteVpcIngressConnectionXAmzTargetEnum {
    AppRunnerDeleteVpcIngressConnection = "AppRunner.DeleteVpcIngressConnection"
}
export declare class DeleteVpcIngressConnectionRequest extends SpeakeasyBase {
    deleteVpcIngressConnectionRequest: shared.DeleteVpcIngressConnectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteVpcIngressConnectionXAmzTargetEnum;
}
export declare class DeleteVpcIngressConnectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteVpcIngressConnectionResponse?: shared.DeleteVpcIngressConnectionResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
