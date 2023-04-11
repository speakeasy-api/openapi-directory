import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteReportXAmzTargetEnum {
    CodeBuild20161006DeleteReport = "CodeBuild_20161006.DeleteReport"
}
export declare class DeleteReportRequest extends SpeakeasyBase {
    deleteReportInput: shared.DeleteReportInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteReportXAmzTargetEnum;
}
export declare class DeleteReportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteReportOutput?: Record<string, any>;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
