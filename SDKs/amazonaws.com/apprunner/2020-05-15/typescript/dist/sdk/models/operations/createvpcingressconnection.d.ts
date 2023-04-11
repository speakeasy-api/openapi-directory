import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateVpcIngressConnectionXAmzTargetEnum {
    AppRunnerCreateVpcIngressConnection = "AppRunner.CreateVpcIngressConnection"
}
export declare class CreateVpcIngressConnectionRequest extends SpeakeasyBase {
    createVpcIngressConnectionRequest: shared.CreateVpcIngressConnectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateVpcIngressConnectionXAmzTargetEnum;
}
export declare class CreateVpcIngressConnectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createVpcIngressConnectionResponse?: shared.CreateVpcIngressConnectionResponse;
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
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
