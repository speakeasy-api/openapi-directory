import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeProjectXAmzTargetEnum {
    CodeStar20170419DescribeProject = "CodeStar_20170419.DescribeProject"
}
export declare class DescribeProjectRequest extends SpeakeasyBase {
    describeProjectRequest: shared.DescribeProjectRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProjectXAmzTargetEnum;
}
export declare class DescribeProjectResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    describeProjectResult?: shared.DescribeProjectResult;
    /**
     * InvalidServiceRoleException
     */
    invalidServiceRoleException?: any;
    /**
     * ProjectConfigurationException
     */
    projectConfigurationException?: any;
    /**
     * ProjectNotFoundException
     */
    projectNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
