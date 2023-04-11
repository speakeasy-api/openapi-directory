import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateReportGroupXAmzTargetEnum {
    CodeBuild20161006CreateReportGroup = "CodeBuild_20161006.CreateReportGroup"
}
export declare class CreateReportGroupRequest extends SpeakeasyBase {
    createReportGroupInput: shared.CreateReportGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateReportGroupXAmzTargetEnum;
}
export declare class CreateReportGroupResponse extends SpeakeasyBase {
    /**
     * AccountLimitExceededException
     */
    accountLimitExceededException?: any;
    contentType: string;
    /**
     * Success
     */
    createReportGroupOutput?: shared.CreateReportGroupOutput;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
}
