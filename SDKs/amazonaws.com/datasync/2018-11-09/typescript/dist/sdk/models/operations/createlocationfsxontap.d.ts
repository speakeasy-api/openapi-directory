import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLocationFsxOntapXAmzTargetEnum {
    FmrsServiceCreateLocationFsxOntap = "FmrsService.CreateLocationFsxOntap"
}
export declare class CreateLocationFsxOntapRequest extends SpeakeasyBase {
    createLocationFsxOntapRequest: shared.CreateLocationFsxOntapRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLocationFsxOntapXAmzTargetEnum;
}
export declare class CreateLocationFsxOntapResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createLocationFsxOntapResponse?: shared.CreateLocationFsxOntapResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
