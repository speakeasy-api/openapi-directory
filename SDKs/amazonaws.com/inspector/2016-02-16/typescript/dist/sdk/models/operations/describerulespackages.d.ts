import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRulesPackagesXAmzTargetEnum {
    InspectorServiceDescribeRulesPackages = "InspectorService.DescribeRulesPackages"
}
export declare class DescribeRulesPackagesRequest extends SpeakeasyBase {
    describeRulesPackagesRequest: shared.DescribeRulesPackagesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRulesPackagesXAmzTargetEnum;
}
export declare class DescribeRulesPackagesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRulesPackagesResponse?: shared.DescribeRulesPackagesResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
