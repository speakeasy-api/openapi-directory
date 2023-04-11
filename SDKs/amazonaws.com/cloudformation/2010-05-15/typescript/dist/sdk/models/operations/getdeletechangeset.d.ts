import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteChangeSetActionEnum {
    DeleteChangeSet = "DeleteChangeSet"
}
export declare enum GETDeleteChangeSetVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class GETDeleteChangeSetRequest extends SpeakeasyBase {
    action: GETDeleteChangeSetActionEnum;
    /**
     * The name or Amazon Resource Name (ARN) of the change set that you want to delete.
     */
    changeSetName: string;
    /**
     * If you specified the name of a change set to delete, specify the stack name or Amazon Resource Name (ARN) that's associated with it.
     */
    stackName?: string;
    version: GETDeleteChangeSetVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteChangeSetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
