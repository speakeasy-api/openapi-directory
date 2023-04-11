import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETExecuteChangeSetActionEnum {
    ExecuteChangeSet = "ExecuteChangeSet"
}
export declare enum GETExecuteChangeSetVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETExecuteChangeSetRequest extends SpeakeasyBase {
    action: GETExecuteChangeSetActionEnum;
    /**
     * The name or Amazon Resource Name (ARN) of the change set that you want use to update the specified stack.
     */
    changeSetName: string;
    /**
     * A unique identifier for this <code>ExecuteChangeSet</code> request. Specify this token if you plan to retry requests so that CloudFormation knows that you're not attempting to execute a change set to update a stack with the same name. You might retry <code>ExecuteChangeSet</code> requests to ensure that CloudFormation successfully received them.
     */
    clientRequestToken?: string;
    /**
     * <p>Preserves the state of previously provisioned resources when an operation fails.</p> <p>Default: <code>True</code> </p>
     */
    disableRollback?: boolean;
    /**
     * If you specified the name of a change set, specify the stack name or Amazon Resource Name (ARN) that's associated with the change set you want to execute.
     */
    stackName?: string;
    version: GETExecuteChangeSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETExecuteChangeSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
