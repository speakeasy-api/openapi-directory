import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLocationS3XAmzTargetEnum {
    FmrsServiceCreateLocationS3 = "FmrsService.CreateLocationS3"
}
export declare class CreateLocationS3Request extends SpeakeasyBase {
    createLocationS3Request: shared.CreateLocationS3Request;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLocationS3XAmzTargetEnum;
}
export declare class CreateLocationS3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createLocationS3Response?: shared.CreateLocationS3Response;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
