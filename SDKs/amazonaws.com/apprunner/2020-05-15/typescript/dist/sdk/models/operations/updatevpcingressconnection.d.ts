import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateVpcIngressConnectionXAmzTargetEnum {
    AppRunnerUpdateVpcIngressConnection = "AppRunner.UpdateVpcIngressConnection"
}
export declare class UpdateVpcIngressConnectionRequest extends SpeakeasyBase {
    updateVpcIngressConnectionRequest: shared.UpdateVpcIngressConnectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateVpcIngressConnectionXAmzTargetEnum;
}
export declare class UpdateVpcIngressConnectionResponse extends SpeakeasyBase {
    contentType: string;
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
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateVpcIngressConnectionResponse?: shared.UpdateVpcIngressConnectionResponse;
}
