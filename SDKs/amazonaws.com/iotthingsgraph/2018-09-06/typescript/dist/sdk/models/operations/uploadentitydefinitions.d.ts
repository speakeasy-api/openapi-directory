import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UploadEntityDefinitionsXAmzTargetEnum {
    IotThingsGraphFrontEndServiceUploadEntityDefinitions = "IotThingsGraphFrontEndService.UploadEntityDefinitions"
}
export declare class UploadEntityDefinitionsRequest extends SpeakeasyBase {
    uploadEntityDefinitionsRequest: shared.UploadEntityDefinitionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UploadEntityDefinitionsXAmzTargetEnum;
}
export declare class UploadEntityDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    uploadEntityDefinitionsResponse?: shared.UploadEntityDefinitionsResponse;
}
