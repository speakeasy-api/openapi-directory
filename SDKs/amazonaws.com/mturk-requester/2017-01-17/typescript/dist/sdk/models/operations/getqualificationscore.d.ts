import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetQualificationScoreXAmzTargetEnum {
    MTurkRequesterServiceV20170117GetQualificationScore = "MTurkRequesterServiceV20170117.GetQualificationScore"
}
export declare class GetQualificationScoreRequest extends SpeakeasyBase {
    getQualificationScoreRequest: shared.GetQualificationScoreRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetQualificationScoreXAmzTargetEnum;
}
export declare class GetQualificationScoreResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getQualificationScoreResponse?: shared.GetQualificationScoreResponse;
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
