import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AllocateHostedConnectionXAmzTargetEnum {
    OvertureServiceAllocateHostedConnection = "OvertureService.AllocateHostedConnection"
}
export declare class AllocateHostedConnectionRequest extends SpeakeasyBase {
    allocateHostedConnectionRequest: shared.AllocateHostedConnectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AllocateHostedConnectionXAmzTargetEnum;
}
export declare class AllocateHostedConnectionResponse extends SpeakeasyBase {
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
    /**
     * DuplicateTagKeysException
     */
    duplicateTagKeysException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}
