import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListApplicationsXAmzTargetEnum {
    CodeDeploy20141006ListApplications = "CodeDeploy_20141006.ListApplications"
}
export declare class ListApplicationsRequest extends SpeakeasyBase {
    listApplicationsInput: shared.ListApplicationsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListApplicationsXAmzTargetEnum;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * Success
     */
    listApplicationsOutput?: shared.ListApplicationsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
