import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteLocationXAmzTargetEnum {
    FmrsServiceDeleteLocation = "FmrsService.DeleteLocation"
}
export declare class DeleteLocationRequest extends SpeakeasyBase {
    deleteLocationRequest: shared.DeleteLocationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLocationXAmzTargetEnum;
}
export declare class DeleteLocationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteLocationResponse?: Record<string, any>;
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
