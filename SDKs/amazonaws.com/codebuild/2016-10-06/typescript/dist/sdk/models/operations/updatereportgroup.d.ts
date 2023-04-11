import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateReportGroupXAmzTargetEnum {
    CodeBuild20161006UpdateReportGroup = "CodeBuild_20161006.UpdateReportGroup"
}
export declare class UpdateReportGroupRequest extends SpeakeasyBase {
    updateReportGroupInput: shared.UpdateReportGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateReportGroupXAmzTargetEnum;
}
export declare class UpdateReportGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateReportGroupOutput?: shared.UpdateReportGroupOutput;
}
