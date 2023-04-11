import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateConnectionXAmzTargetEnum {
    OvertureServiceCreateConnection = "OvertureService.CreateConnection"
}
export declare class CreateConnectionRequest extends SpeakeasyBase {
    createConnectionRequest: shared.CreateConnectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateConnectionXAmzTargetEnum;
}
export declare class CreateConnectionResponse extends SpeakeasyBase {
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
