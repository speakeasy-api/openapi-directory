import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateSettingsXAmzTargetEnum {
    DirectoryService20150416UpdateSettings = "DirectoryService_20150416.UpdateSettings"
}
export declare class UpdateSettingsRequest extends SpeakeasyBase {
    updateSettingsRequest: shared.UpdateSettingsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSettingsXAmzTargetEnum;
}
export declare class UpdateSettingsResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * DirectoryDoesNotExistException
     */
    directoryDoesNotExistException?: any;
    /**
     * DirectoryUnavailableException
     */
    directoryUnavailableException?: any;
    /**
     * IncompatibleSettingsException
     */
    incompatibleSettingsException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
    /**
     * UnsupportedSettingsException
     */
    unsupportedSettingsException?: any;
    /**
     * Success
     */
    updateSettingsResult?: shared.UpdateSettingsResult;
}
