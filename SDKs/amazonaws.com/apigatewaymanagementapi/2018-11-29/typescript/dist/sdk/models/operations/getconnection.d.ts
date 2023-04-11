import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConnectionRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    connectionId: string;
}
export declare class GetConnectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * Success
     */
    getConnectionResponse?: shared.GetConnectionResponse;
    /**
     * GoneException
     */
    goneException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
