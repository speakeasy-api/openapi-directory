import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateMicrosoftADXAmzTargetEnum {
    DirectoryService20150416CreateMicrosoftAD = "DirectoryService_20150416.CreateMicrosoftAD"
}
export declare class CreateMicrosoftADRequest extends SpeakeasyBase {
    createMicrosoftADRequest: shared.CreateMicrosoftADRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateMicrosoftADXAmzTargetEnum;
}
export declare class CreateMicrosoftADResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    createMicrosoftADResult?: shared.CreateMicrosoftADResult;
    /**
     * DirectoryLimitExceededException
     */
    directoryLimitExceededException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
