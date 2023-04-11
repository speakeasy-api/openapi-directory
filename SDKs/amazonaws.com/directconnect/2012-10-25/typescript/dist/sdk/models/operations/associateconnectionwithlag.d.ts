import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateConnectionWithLagXAmzTargetEnum {
    OvertureServiceAssociateConnectionWithLag = "OvertureService.AssociateConnectionWithLag"
}
export declare class AssociateConnectionWithLagRequest extends SpeakeasyBase {
    associateConnectionWithLagRequest: shared.AssociateConnectionWithLagRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateConnectionWithLagXAmzTargetEnum;
}
export declare class AssociateConnectionWithLagResponse extends SpeakeasyBase {
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
