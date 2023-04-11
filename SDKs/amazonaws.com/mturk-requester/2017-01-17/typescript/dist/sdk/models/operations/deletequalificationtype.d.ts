import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteQualificationTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117DeleteQualificationType = "MTurkRequesterServiceV20170117.DeleteQualificationType"
}
export declare class DeleteQualificationTypeRequest extends SpeakeasyBase {
    deleteQualificationTypeRequest: shared.DeleteQualificationTypeRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteQualificationTypeXAmzTargetEnum;
}
export declare class DeleteQualificationTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteQualificationTypeResponse?: Record<string, any>;
    /**
     * RequestError
     */
    requestError?: any;
    /**
     * ServiceFault
     */
    serviceFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
