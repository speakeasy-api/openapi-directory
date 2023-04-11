import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutConfigurationAggregatorXAmzTargetEnum {
    StarlingDoveServicePutConfigurationAggregator = "StarlingDoveService.PutConfigurationAggregator"
}
export declare class PutConfigurationAggregatorRequest extends SpeakeasyBase {
    putConfigurationAggregatorRequest: shared.PutConfigurationAggregatorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutConfigurationAggregatorXAmzTargetEnum;
}
export declare class PutConfigurationAggregatorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * InvalidRoleException
     */
    invalidRoleException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NoAvailableOrganizationException
     */
    noAvailableOrganizationException?: any;
    /**
     * OrganizationAccessDeniedException
     */
    organizationAccessDeniedException?: any;
    /**
     * OrganizationAllFeaturesNotEnabledException
     */
    organizationAllFeaturesNotEnabledException?: any;
    /**
     * Success
     */
    putConfigurationAggregatorResponse?: shared.PutConfigurationAggregatorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
