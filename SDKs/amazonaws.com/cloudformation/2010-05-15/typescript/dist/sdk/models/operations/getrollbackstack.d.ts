import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRollbackStackActionEnum {
    RollbackStack = "RollbackStack"
}
export declare enum GETRollbackStackVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETRollbackStackRequest extends SpeakeasyBase {
    action: GETRollbackStackActionEnum;
    /**
     * A unique identifier for this <code>RollbackStack</code> request.
     */
    clientRequestToken?: string;
    /**
     * The Amazon Resource Name (ARN) of an Identity and Access Management role that CloudFormation assumes to rollback the stack.
     */
    roleARN?: string;
    /**
     * The name that's associated with the stack.
     */
    stackName: string;
    version: GETRollbackStackVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRollbackStackResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
