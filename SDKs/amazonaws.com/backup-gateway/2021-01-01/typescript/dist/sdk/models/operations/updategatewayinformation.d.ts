import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateGatewayInformationXAmzTargetEnum {
    BackupOnPremisesV20210101UpdateGatewayInformation = "BackupOnPremises_v20210101.UpdateGatewayInformation"
}
export declare class UpdateGatewayInformationRequest extends SpeakeasyBase {
    updateGatewayInformationInput: shared.UpdateGatewayInformationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateGatewayInformationXAmzTargetEnum;
}
export declare class UpdateGatewayInformationResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
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
     * Success
     */
    updateGatewayInformationOutput?: shared.UpdateGatewayInformationOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
