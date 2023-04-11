import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateServiceActionXAmzTargetEnum {
    Aws242ServiceCatalogServiceCreateServiceAction = "AWS242ServiceCatalogService.CreateServiceAction"
}
export declare class CreateServiceActionRequest extends SpeakeasyBase {
    createServiceActionInput: shared.CreateServiceActionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateServiceActionXAmzTargetEnum;
}
export declare class CreateServiceActionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createServiceActionOutput?: shared.CreateServiceActionOutput;
    /**
     * InvalidParametersException
     */
    invalidParametersException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
