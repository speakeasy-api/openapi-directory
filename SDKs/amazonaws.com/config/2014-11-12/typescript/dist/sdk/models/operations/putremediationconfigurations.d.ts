import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutRemediationConfigurationsXAmzTargetEnum {
    StarlingDoveServicePutRemediationConfigurations = "StarlingDoveService.PutRemediationConfigurations"
}
export declare class PutRemediationConfigurationsRequest extends SpeakeasyBase {
    putRemediationConfigurationsRequest: shared.PutRemediationConfigurationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRemediationConfigurationsXAmzTargetEnum;
}
export declare class PutRemediationConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InsufficientPermissionsException
     */
    insufficientPermissionsException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * Success
     */
    putRemediationConfigurationsResponse?: shared.PutRemediationConfigurationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
