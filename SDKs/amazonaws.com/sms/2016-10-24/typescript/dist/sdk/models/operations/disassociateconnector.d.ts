import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateConnectorXAmzTargetEnum {
    AWSServerMigrationServiceV20161024DisassociateConnector = "AWSServerMigrationService_V2016_10_24.DisassociateConnector"
}
export declare class DisassociateConnectorRequest extends SpeakeasyBase {
    disassociateConnectorRequest: shared.DisassociateConnectorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateConnectorXAmzTargetEnum;
}
export declare class DisassociateConnectorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateConnectorResponse?: Record<string, any>;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * MissingRequiredParameterException
     */
    missingRequiredParameterException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedOperationException
     */
    unauthorizedOperationException?: any;
}
