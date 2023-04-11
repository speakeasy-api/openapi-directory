import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartAssociationsOnceXAmzTargetEnum {
    AmazonSSMStartAssociationsOnce = "AmazonSSM.StartAssociationsOnce"
}
export declare class StartAssociationsOnceRequest extends SpeakeasyBase {
    startAssociationsOnceRequest: shared.StartAssociationsOnceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartAssociationsOnceXAmzTargetEnum;
}
export declare class StartAssociationsOnceResponse extends SpeakeasyBase {
    /**
     * AssociationDoesNotExist
     */
    associationDoesNotExist?: any;
    contentType: string;
    /**
     * InvalidAssociation
     */
    invalidAssociation?: any;
    /**
     * Success
     */
    startAssociationsOnceResult?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
