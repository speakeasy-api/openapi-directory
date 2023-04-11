import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateTrialComponentXAmzTargetEnum {
    SageMakerDisassociateTrialComponent = "SageMaker.DisassociateTrialComponent"
}
export declare class DisassociateTrialComponentRequest extends SpeakeasyBase {
    disassociateTrialComponentRequest: shared.DisassociateTrialComponentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateTrialComponentXAmzTargetEnum;
}
export declare class DisassociateTrialComponentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateTrialComponentResponse?: shared.DisassociateTrialComponentResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
