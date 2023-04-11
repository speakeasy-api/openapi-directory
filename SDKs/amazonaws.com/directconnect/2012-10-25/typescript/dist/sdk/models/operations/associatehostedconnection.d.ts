import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateHostedConnectionXAmzTargetEnum {
    OvertureServiceAssociateHostedConnection = "OvertureService.AssociateHostedConnection"
}
export declare class AssociateHostedConnectionRequest extends SpeakeasyBase {
    associateHostedConnectionRequest: shared.AssociateHostedConnectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateHostedConnectionXAmzTargetEnum;
}
export declare class AssociateHostedConnectionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    connection?: shared.Connection;
    contentType: string;
    /**
     * DirectConnectClientException
     */
    directConnectClientException?: any;
    /**
     * DirectConnectServerException
     */
    directConnectServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
