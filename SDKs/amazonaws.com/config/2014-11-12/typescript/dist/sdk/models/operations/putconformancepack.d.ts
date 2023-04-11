import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutConformancePackXAmzTargetEnum {
    StarlingDoveServicePutConformancePack = "StarlingDoveService.PutConformancePack"
}
export declare class PutConformancePackRequest extends SpeakeasyBase {
    putConformancePackRequest: shared.PutConformancePackRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutConformancePackXAmzTargetEnum;
}
export declare class PutConformancePackResponse extends SpeakeasyBase {
    /**
     * ConformancePackTemplateValidationException
     */
    conformancePackTemplateValidationException?: any;
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
     * MaxNumberOfConformancePacksExceededException
     */
    maxNumberOfConformancePacksExceededException?: any;
    /**
     * Success
     */
    putConformancePackResponse?: shared.PutConformancePackResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
}
