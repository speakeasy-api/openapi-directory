import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetGatewayXAmzTargetEnum {
    BackupOnPremisesV20210101GetGateway = "BackupOnPremises_v20210101.GetGateway"
}
export declare class GetGatewayRequest extends SpeakeasyBase {
    getGatewayInput: shared.GetGatewayInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetGatewayXAmzTargetEnum;
}
export declare class GetGatewayResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getGatewayOutput?: shared.GetGatewayOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
