import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateGatewaySoftwareNowXAmzTargetEnum {
    BackupOnPremisesV20210101UpdateGatewaySoftwareNow = "BackupOnPremises_v20210101.UpdateGatewaySoftwareNow"
}
export declare class UpdateGatewaySoftwareNowRequest extends SpeakeasyBase {
    updateGatewaySoftwareNowInput: shared.UpdateGatewaySoftwareNowInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateGatewaySoftwareNowXAmzTargetEnum;
}
export declare class UpdateGatewaySoftwareNowResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateGatewaySoftwareNowOutput?: shared.UpdateGatewaySoftwareNowOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
