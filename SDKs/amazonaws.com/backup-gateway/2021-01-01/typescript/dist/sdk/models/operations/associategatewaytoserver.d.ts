import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateGatewayToServerXAmzTargetEnum {
    BackupOnPremisesV20210101AssociateGatewayToServer = "BackupOnPremises_v20210101.AssociateGatewayToServer"
}
export declare class AssociateGatewayToServerRequest extends SpeakeasyBase {
    associateGatewayToServerInput: shared.AssociateGatewayToServerInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateGatewayToServerXAmzTargetEnum;
}
export declare class AssociateGatewayToServerResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateGatewayToServerOutput?: shared.AssociateGatewayToServerOutput;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
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
