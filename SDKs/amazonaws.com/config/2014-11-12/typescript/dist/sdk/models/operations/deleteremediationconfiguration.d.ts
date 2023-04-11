import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRemediationConfigurationXAmzTargetEnum {
    StarlingDoveServiceDeleteRemediationConfiguration = "StarlingDoveService.DeleteRemediationConfiguration"
}
export declare class DeleteRemediationConfigurationRequest extends SpeakeasyBase {
    deleteRemediationConfigurationRequest: shared.DeleteRemediationConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRemediationConfigurationXAmzTargetEnum;
}
export declare class DeleteRemediationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteRemediationConfigurationResponse?: Record<string, any>;
    /**
     * InsufficientPermissionsException
     */
    insufficientPermissionsException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * NoSuchRemediationConfigurationException
     */
    noSuchRemediationConfigurationException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RemediationInProgressException
     */
    remediationInProgressException?: any;
}
