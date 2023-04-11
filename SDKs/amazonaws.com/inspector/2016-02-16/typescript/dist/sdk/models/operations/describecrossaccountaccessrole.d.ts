import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCrossAccountAccessRoleXAmzTargetEnum {
    InspectorServiceDescribeCrossAccountAccessRole = "InspectorService.DescribeCrossAccountAccessRole"
}
export declare class DescribeCrossAccountAccessRoleRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCrossAccountAccessRoleXAmzTargetEnum;
}
export declare class DescribeCrossAccountAccessRoleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeCrossAccountAccessRoleResponse?: shared.DescribeCrossAccountAccessRoleResponse;
    /**
     * InternalException
     */
    internalException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
