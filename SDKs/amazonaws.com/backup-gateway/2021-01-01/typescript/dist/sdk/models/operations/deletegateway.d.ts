import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteGatewayXAmzTargetEnum {
    BackupOnPremisesV20210101DeleteGateway = "BackupOnPremises_v20210101.DeleteGateway"
}
export declare class DeleteGatewayRequest extends SpeakeasyBase {
    deleteGatewayInput: shared.DeleteGatewayInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteGatewayXAmzTargetEnum;
}
export declare class DeleteGatewayResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteGatewayOutput?: shared.DeleteGatewayOutput;
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
