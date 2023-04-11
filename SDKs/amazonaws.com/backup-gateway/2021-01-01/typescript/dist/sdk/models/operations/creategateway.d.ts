import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateGatewayXAmzTargetEnum {
    BackupOnPremisesV20210101CreateGateway = "BackupOnPremises_v20210101.CreateGateway"
}
export declare class CreateGatewayRequest extends SpeakeasyBase {
    createGatewayInput: shared.CreateGatewayInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateGatewayXAmzTargetEnum;
}
export declare class CreateGatewayResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createGatewayOutput?: shared.CreateGatewayOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
