import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListBuildsXAmzTargetEnum {
    CodeBuild20161006ListBuilds = "CodeBuild_20161006.ListBuilds"
}
export declare class ListBuildsRequest extends SpeakeasyBase {
    listBuildsInput: shared.ListBuildsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListBuildsXAmzTargetEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListBuildsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * Success
     */
    listBuildsOutput?: shared.ListBuildsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
