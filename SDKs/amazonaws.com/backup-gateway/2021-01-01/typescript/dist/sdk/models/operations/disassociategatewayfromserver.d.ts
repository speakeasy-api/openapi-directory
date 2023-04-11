import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateGatewayFromServerXAmzTargetEnum {
    BackupOnPremisesV20210101DisassociateGatewayFromServer = "BackupOnPremises_v20210101.DisassociateGatewayFromServer"
}
export declare class DisassociateGatewayFromServerRequest extends SpeakeasyBase {
    disassociateGatewayFromServerInput: shared.DisassociateGatewayFromServerInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateGatewayFromServerXAmzTargetEnum;
}
export declare class DisassociateGatewayFromServerResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    disassociateGatewayFromServerOutput?: shared.DisassociateGatewayFromServerOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
