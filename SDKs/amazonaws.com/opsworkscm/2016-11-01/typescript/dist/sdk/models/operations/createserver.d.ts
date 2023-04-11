import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateServerXAmzTargetEnum {
    OpsWorksCMV20161101CreateServer = "OpsWorksCM_V2016_11_01.CreateServer"
}
export declare class CreateServerRequest extends SpeakeasyBase {
    createServerRequest: shared.CreateServerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateServerXAmzTargetEnum;
}
export declare class CreateServerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createServerResponse?: shared.CreateServerResponse;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
