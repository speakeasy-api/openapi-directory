import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCalendarStateXAmzTargetEnum {
    AmazonSSMGetCalendarState = "AmazonSSM.GetCalendarState"
}
export declare class GetCalendarStateRequest extends SpeakeasyBase {
    getCalendarStateRequest: shared.GetCalendarStateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCalendarStateXAmzTargetEnum;
}
export declare class GetCalendarStateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getCalendarStateResponse?: shared.GetCalendarStateResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidDocument
     */
    invalidDocument?: any;
    /**
     * InvalidDocumentType
     */
    invalidDocumentType?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedCalendarException
     */
    unsupportedCalendarException?: any;
}
