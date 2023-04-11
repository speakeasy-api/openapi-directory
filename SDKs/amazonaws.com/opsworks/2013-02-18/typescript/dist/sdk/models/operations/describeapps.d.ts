import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAppsXAmzTargetEnum {
    OpsWorks20130218DescribeApps = "OpsWorks_20130218.DescribeApps"
}
export declare class DescribeAppsRequest extends SpeakeasyBase {
    describeAppsRequest: shared.DescribeAppsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAppsXAmzTargetEnum;
}
export declare class DescribeAppsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAppsResult?: shared.DescribeAppsResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
