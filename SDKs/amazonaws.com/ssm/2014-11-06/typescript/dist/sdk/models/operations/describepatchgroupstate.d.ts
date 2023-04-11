import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePatchGroupStateXAmzTargetEnum {
    AmazonSSMDescribePatchGroupState = "AmazonSSM.DescribePatchGroupState"
}
export declare class DescribePatchGroupStateRequest extends SpeakeasyBase {
    describePatchGroupStateRequest: shared.DescribePatchGroupStateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePatchGroupStateXAmzTargetEnum;
}
export declare class DescribePatchGroupStateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePatchGroupStateResult?: shared.DescribePatchGroupStateResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
