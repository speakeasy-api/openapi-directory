import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteReportGroupXAmzTargetEnum {
    CodeBuild20161006DeleteReportGroup = "CodeBuild_20161006.DeleteReportGroup"
}
export declare class DeleteReportGroupRequest extends SpeakeasyBase {
    deleteReportGroupInput: shared.DeleteReportGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteReportGroupXAmzTargetEnum;
}
export declare class DeleteReportGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteReportGroupOutput?: Record<string, any>;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
