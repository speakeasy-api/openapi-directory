import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request object for <code>DescribeFileSystemAliases</code> operation.
 */
export declare class DescribeFileSystemAliasesRequest extends SpeakeasyBase {
    /**
     * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
     */
    clientRequestToken?: string;
    fileSystemId: string;
    maxResults?: number;
    nextToken?: string;
}
