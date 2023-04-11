import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAccountModificationsXAmzTargetEnum {
    WorkspacesServiceDescribeAccountModifications = "WorkspacesService.DescribeAccountModifications"
}
export declare class DescribeAccountModificationsRequest extends SpeakeasyBase {
    describeAccountModificationsRequest: shared.DescribeAccountModificationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAccountModificationsXAmzTargetEnum;
}
export declare class DescribeAccountModificationsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeAccountModificationsResult?: shared.DescribeAccountModificationsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
