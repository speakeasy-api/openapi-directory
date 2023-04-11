import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateS3ResourcesXAmzTargetEnum {
    MacieServiceUpdateS3Resources = "MacieService.UpdateS3Resources"
}
export declare class UpdateS3ResourcesRequest extends SpeakeasyBase {
    updateS3ResourcesRequest: shared.UpdateS3ResourcesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateS3ResourcesXAmzTargetEnum;
}
export declare class UpdateS3ResourcesResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateS3ResourcesResult?: shared.UpdateS3ResourcesResult;
}
