import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetReportGroupTrendXAmzTargetEnum {
    CodeBuild20161006GetReportGroupTrend = "CodeBuild_20161006.GetReportGroupTrend"
}
export declare class GetReportGroupTrendRequest extends SpeakeasyBase {
    getReportGroupTrendInput: shared.GetReportGroupTrendInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetReportGroupTrendXAmzTargetEnum;
}
export declare class GetReportGroupTrendResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getReportGroupTrendOutput?: shared.GetReportGroupTrendOutput;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
