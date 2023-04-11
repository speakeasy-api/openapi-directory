import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateApplicationMaintenanceConfigurationXAmzTargetEnum {
    KinesisAnalytics20180523UpdateApplicationMaintenanceConfiguration = "KinesisAnalytics_20180523.UpdateApplicationMaintenanceConfiguration"
}
export declare class UpdateApplicationMaintenanceConfigurationRequest extends SpeakeasyBase {
    updateApplicationMaintenanceConfigurationRequest: shared.UpdateApplicationMaintenanceConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateApplicationMaintenanceConfigurationXAmzTargetEnum;
}
export declare class UpdateApplicationMaintenanceConfigurationResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
    /**
     * Success
     */
    updateApplicationMaintenanceConfigurationResponse?: shared.UpdateApplicationMaintenanceConfigurationResponse;
}
