import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEntitlementsXAmzTargetEnum {
    PhotonAdminProxyServiceDescribeEntitlements = "PhotonAdminProxyService.DescribeEntitlements"
}
export declare class DescribeEntitlementsRequest extends SpeakeasyBase {
    describeEntitlementsRequest: shared.DescribeEntitlementsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEntitlementsXAmzTargetEnum;
}
export declare class DescribeEntitlementsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEntitlementsResult?: shared.DescribeEntitlementsResult;
    /**
     * EntitlementNotFoundException
     */
    entitlementNotFoundException?: any;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
