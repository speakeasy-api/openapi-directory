import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRetentionConfigurationXAmzTargetEnum {
    StarlingDoveServiceDeleteRetentionConfiguration = "StarlingDoveService.DeleteRetentionConfiguration"
}
export declare class DeleteRetentionConfigurationRequest extends SpeakeasyBase {
    deleteRetentionConfigurationRequest: shared.DeleteRetentionConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRetentionConfigurationXAmzTargetEnum;
}
export declare class DeleteRetentionConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * NoSuchRetentionConfigurationException
     */
    noSuchRetentionConfigurationException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
