import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateFleetRequestBody extends SpeakeasyBase {
    /**
     * The name of the fleet.
     */
    name: string;
    /**
     * A map that contains tag keys and tag values that are attached to the fleet.
     */
    tags?: Record<string, string>;
}
export declare class CreateFleetRequest extends SpeakeasyBase {
    requestBody: CreateFleetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateFleetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createFleetResponse?: shared.CreateFleetResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
